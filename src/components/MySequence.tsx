'use client'

import { useScroll } from 'framer-motion'
import ImageSequence from './ImageSequence'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function MySequence() {
    const { scrollYProgress } = useScroll()

    const images = useMemo(() => {
        const images = []
        for (let i = 1; i < 242; i++) {
            const numberOfDigits = i.toString().length
            const numberOfZeros = 4 - numberOfDigits
            images.push(`/therapy/frames/${'0'.repeat(numberOfZeros)}${i}.jpg`)
        }
        return images
    }, [])

    return (
        <ImageSequence
            progress={scrollYProgress}
            images={images}
            // wrapperComponent={Wrapper}
            className="fixed w-full h-screen object-cover object-center md:scale-[1] origin-top-left z-[-1] opacity-25 animate-show-up"
        />
    )
}
