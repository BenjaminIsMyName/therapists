import Section from '@/components/Section'
import Image from 'next/image'
import { Noto_Sans } from 'next/font/google'
import Advantage from '@/components/Advantage'
import WelcomeSection from './WelcomeSection'
import AdvantagesSection from './AdvantagesSection'
import PackagesSection from './PackagesSection'
import ImageSequence from '@/components/ImageSequence'
import { useMotionValue } from 'framer-motion'
import MySequence from '@/components/MySequence'
import TherapistsSection from './TherapistsSection'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '900' })
const notoSansRegular = Noto_Sans({ subsets: ['latin'], weight: '400' })

export default function Home() {
    return (
        <>
            <WelcomeSection />
            <AdvantagesSection />
            <PackagesSection />
            <TherapistsSection />
        </>
    )
}
