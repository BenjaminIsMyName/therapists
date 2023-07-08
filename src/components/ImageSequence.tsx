import {
    CSSProperties,
    ComponentType,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import {
    clamp,
    MotionValue,
    useMotionValueEvent,
    useScroll,
    motion,
} from 'framer-motion'

// To convert a video to a sequence of images you can use ffmpeg:
//      ffmpeg -i "airpods.mp4" "frames/%04d.jpg"

interface ImageSequenceProps {
    progress: MotionValue<number>
    images: string[]
    style?: CSSProperties
    className?: string
    wrapperComponent?: ComponentType<{
        children: ReactNode
        loadedAll: boolean
    }>
}

export default function ImageSequence({
    images,
    className,
    wrapperComponent,
}: ImageSequenceProps) {
    const imageRef = useRef<HTMLImageElement>(null) // the image element that is being displayed
    const imgRefs = useRef<HTMLImageElement[]>([]) // all the image elements
    const frameRef = useRef<number>() // the current frame that is being displayed
    const loadedCountRef = useRef(0) // the number of images that have been loaded
    const [loadedAll, setLoadedAll] = useState(false) // whether all images have been loaded
    const { scrollYProgress: progress } = useScroll()

    const getCurrentFrameIndex = useCallback(
        (specificFrame?: number) => {
            return clamp(
                0,
                images.length - 1,
                Math.floor(specificFrame ?? progress.get() * images.length)
            )
        },
        [images.length, progress]
    )

    const setFrame = useCallback(
        (rawFrame: number) => {
            const frame = getCurrentFrameIndex(rawFrame)
            if (loadedAll && imageRef.current) {
                frameRef.current = frame
                imageRef.current.src = imgRefs.current[frame]?.src
            }
        },
        [getCurrentFrameIndex, loadedAll]
    )

    useMotionValueEvent(progress, 'change', val => {
        const frame = clamp(
            0,
            images.length - 1,
            Math.floor(val * images.length)
        )
        setFrame(frame)
    })

    useEffect(() => {
        function onSingleImageLoad(element: HTMLImageElement) {
            loadedCountRef.current++
            if (loadedCountRef.current === images.length) {
                // all images have been loaded
                setLoadedAll(true)
                setFrame(getCurrentFrameIndex())
            }
            // remove the event listener
            element.onload = null
        }

        function getAllImages() {
            imgRefs.current = images.map(src => {
                const img = new Image()
                img.src = src
                img.onload = () => onSingleImageLoad(img)
                return img
            })
        }

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            getAllImages()
        } else {
            window.addEventListener('load', getAllImages)
            // Remove the event listener when component unmounts
        }

        return () => {
            imgRefs.current.forEach(img => URL.revokeObjectURL(img.src)) // free memory
            frameRef.current = undefined
            loadedCountRef.current = 0
            window.removeEventListener('load', getAllImages)
        }
    }, [getCurrentFrameIndex, images, setFrame]) // this should only run once as long as the images array doesn't change

    // const TheImage = (
    //     // eslint-disable-next-line @next/next/no-img-element
    //     <img ref={imageRef} className={className} alt="Image Sequence" />
    // )

    // wrap the image with the wrapper component
    // if (wrapperComponent) {
    //     const WrapperComponent = wrapperComponent
    //     return <WrapperComponent loadedAll>{image}</WrapperComponent>
    // }

    return loadedAll ? (
        <motion.img
            ref={imageRef}
            className={className}
            alt="Image Sequence"
            initial={{ filter: `opacity(0)` }}
            animate={{ filter: `opacity(1)` }}
            transition={{ duration: 10 }}
        />
    ) : null
}
