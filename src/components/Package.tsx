'use client'

import { useInView } from 'framer-motion'
import { Noto_Sans, Rubik_Dirt } from 'next/font/google'
import { useRef } from 'react'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '900' })
const rubik = Rubik_Dirt({ subsets: ['hebrew'], weight: '400' })

export default function Package({
    name,
    desc,
    classNameWhenInView,
}: {
    name: string
    desc: string
    classNameWhenInView?: string
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div
            ref={ref}
            className={`w-52 h-52 flex ${notoSans.className}
            relative 
            before:hole-down before:content-[''] before:bg-white/20 before:backdrop-blur-md 
            before:absolute before:inset-0 before:z-[-1] before:rounded-2xl
            ${isInView ? classNameWhenInView || '' : 'opacity-0'}
            `}
        >
            <span className="font-light text-sm p-5">{desc}</span>
            <span
                className={`font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-100 to-white text-xl ${rubik.className} absolute bottom-8 w-full text-center
                `}
            >
                {name}
            </span>
        </div>
    )
}
