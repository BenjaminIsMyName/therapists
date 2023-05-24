import Section from '@/components/Section'
import Image from 'next/image'
import { Noto_Sans } from 'next/font/google'
import Advantage from '@/components/Advantage'
import WelcomeSection from './WelcomeSection'
import AdvantagesSection from './AdvantagesSection'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '900' })
const notoSansRegular = Noto_Sans({ subsets: ['latin'], weight: '400' })

export default function Home() {
    return (
        <>
            <WelcomeSection />
            <AdvantagesSection />
            <Section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                asperiores voluptatibus explicabo quia deserunt id quos iste,
                excepturi quo eos esse placeat repellat, corporis quidem,
                tempora recusandae alias autem sapiente.
            </Section>
            <Section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                asperiores voluptatibus explicabo quia deserunt id quos iste,
                excepturi quo eos esse placeat repellat, corporis quidem,
                tempora recusandae alias autem sapiente.
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
