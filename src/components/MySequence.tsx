'use client'

import { useMotionValue, useScroll, useViewportScroll } from 'framer-motion'
import ImageSequence from './ImageSequence'
import { useWindowSize } from 'react-use'
import useLoaded from '@/hooks/useLoaded'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function MySequence() {
    // const { scrollYProgress } = useViewportScroll()
    const { scrollYProgress } = useScroll()
    const loaded = useLoaded()

    const images = useMemo(() => {
        const images = []
        for (let i = 1; i < 242; i++) {
            const numberOfDigits = i.toString().length
            const numberOfZeros = 4 - numberOfDigits
            images.push(`/frames/${'0'.repeat(numberOfZeros)}${i}.jpg`)
        }
        return images
    }, [])

    const { width, height } = useWindowSize()

    return (
        <motion.div
            initial={{ opacity: 0, zIndex: -1, position: 'fixed' }}
            animate={{ opacity: 1, zIndex: -1, position: 'fixed' }}
            transition={{ duration: 5 }}
        >
            {loaded && (
                <ImageSequence
                    progress={scrollYProgress}
                    images={images}
                    height={height}
                    width={width}
                    className="fixed inset-0 w-full h-full object-cover object-left-top md:scale-[2.5] origin-top-left z-[-1] opacity-25"
                />
            )}
        </motion.div>
    )
}
