import { CSSProperties, useCallback, useEffect, useRef } from 'react'
import { clamp, MotionValue, useMotionValueEvent } from 'framer-motion'
interface ImageSequenceProps {
    progress: MotionValue<number>
    images: string[]
    style?: CSSProperties
    className?: string
}

export default function ImageSequence({
    progress,
    images,
    className,
}: ImageSequenceProps) {
    const imageRef = useRef<HTMLImageElement>(null)
    const imgRefs = useRef<HTMLImageElement[]>([])
    const frameRef = useRef<number>() // the current frame that is being displayed

    const setFrame = useCallback(
        (rawFrame: number) => {
            const frame = clamp(0, images.length - 1, Math.floor(rawFrame))
            if (frameRef.current !== frame && imageRef.current) {
                frameRef.current = frame
                imageRef.current.src = imgRefs.current[frame]?.src
            }
        },
        [images.length]
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
        imgRefs.current = images.map(src => {
            const img = new Image()
            img.src = src
            return img
        })

        const frame = clamp(
            0,
            images.length - 1,
            Math.floor(progress.get() * images.length)
        )

        imgRefs.current[frame].onload = () => {
            // set the initial frame by checking the progress (scrollYProgress).
            // it's not always 0, the user might have scrolled down a bit before the page loaded.
            // or the user might have refreshed the page after scrolling (scroll position is automatically restored).
            setFrame(frame)
        }

        return () => {
            imgRefs.current.forEach(img => URL.revokeObjectURL(img.src)) // free memory
            frameRef.current = undefined
        }
    }, [images, progress, setFrame]) // this should only run once as long as the images array doesn't change

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            ref={imageRef}
            className={className}
            src={imgRefs.current[0]?.src ?? ''}
            alt="Image Sequence"
        />
    )
}
