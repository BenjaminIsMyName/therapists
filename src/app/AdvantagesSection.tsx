'use client'

import Advantage from '@/components/Advantage'
import Section from '@/components/Section'
import { useInView } from 'framer-motion'
import { BsCheck2All } from 'react-icons/bs'
import { useRef } from 'react'

export default function AdvantagesSection() {
    const advantages = [
        'חרדות',
        'פוסט-טראומה',
        'דיכאון',
        'כפייתיות',
        'ביטחון עצמי',
        'מחשבות טורדניות',
        'ייעוץ זוגי',
    ]
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <Section>
            <div className="min-h-screen flex items-center justify-center text-white flex-col gap-10">
                <div className="text-5xl">טיפול ב...</div>
                <div ref={ref} className="flex flex-col gap-4 px-9">
                    {isInView &&
                        advantages.map((advantage, index) => (
                            <Advantage key={advantage} delay={index}>
                                <BsCheck2All />
                                <span>{advantage}</span>
                            </Advantage>
                        ))}
                </div>
            </div>
        </Section>
    )
}
