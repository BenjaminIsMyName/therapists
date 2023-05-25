import { CSSProperties, useCallback, useEffect, useRef } from 'react'
import { clamp, MotionValue, useMotionValueEvent } from 'framer-motion'
interface ImageSequenceProps {
    progress: MotionValue<number>
    images: string[]
    height: number
    width: number
    style?: CSSProperties
    className?: string
}

export default function ImageSequence({
    progress,
    images,
    width,
    height,
    className,
}: ImageSequenceProps) {
    const imageRef = useRef<HTMLImageElement>(null)
    const imgRefs = useRef<HTMLImageElement[]>([])
    const frameRef = useRef<number>()

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
        imgRefs.current[0].onload = () => {
            setFrame(0)
        }

        return () => {
            imgRefs.current.forEach(img => URL.revokeObjectURL(img.src)) // free memory
            frameRef.current = undefined
        }
    }, [images, setFrame])

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            ref={imageRef}
            className={className}
            src={imgRefs.current[0]?.src ?? ''}
            alt="Image Sequence"
            width={width}
            height={height}
        />
    )
}
