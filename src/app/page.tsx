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
            <Section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                consequuntur ut enim molestiae minus, beatae doloremque,
                incidunt commodi voluptate eius sed, modi vitae reprehenderit!
                Repudiandae nobis optio molestiae? Incidunt, architecto.
            </Section>
            <Section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                asperiores voluptatibus explicabo quia deserunt id quos iste,
                excepturi quo eos esse placeat repellat, corporis quidem,
                tempora recusandae alias autem sapiente.
            </Section>
        </>
    )
}
