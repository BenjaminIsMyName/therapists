'use client'

import { useScroll } from 'framer-motion'
import ImageSequence from './ImageSequence'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import useLoaded from '@/hooks/useLoaded'

export default function MySequence() {
    const { scrollYProgress } = useScroll()
    const loaded = useLoaded()

    const images = useMemo(() => {
        function isMobileDevice() {
            const mobileMaxWidth = 767 // Maximum width for mobile devices
            return loaded ? window.innerWidth <= mobileMaxWidth : false
        }

        const images: string[] = []

        if (!loaded) return images

        for (let i = 1; i < 200; i++) {
            const numberOfDigits = i.toString().length
            const numberOfZeros = 4 - numberOfDigits
            images.push(
                `/therapy/${
                    isMobileDevice() ? 'mobile' : 'desktop'
                }/${'0'.repeat(numberOfZeros)}${i}.jpg`
            )
        }
        return images
    }, [loaded])

    return (
        <ImageSequence
            progress={scrollYProgress}
            images={images}
            // wrapperComponent={Wrapper}
            className="fixed w-full h-screen object-cover object-center md:scale-[1] origin-top-left z-[-1] opacity-25 animate-show-up"
        />
    )
}
