import { Noto_Sans, Rubik_Dirt } from 'next/font/google'
const notoSans = Noto_Sans({ subsets: ['latin'], weight: '900' })
const rubik = Rubik_Dirt({ subsets: ['hebrew'], weight: '400' })

export default function Therapist({
    name,
    desc,
    phone,
}: {
    name: string
    desc: string
    phone: string
}) {
    return (
        <div
            className={`w-52 h-52 ${notoSans.className}
        relative 
        before:hole-up before:content-[''] before:bg-white/20 before:backdrop-blur-md 
        before:absolute before:inset-0 before:z-[-1] before:rounded-2xl
        `}
        >
            <span
                className={`font-extrabold text-transparent bg-clip-text absolute top-8
            bg-gradient-to-r from-purple-100 to-white text-xl ${rubik.className} w-full text-center
            `}
            >
                {name}
            </span>

            <span className="font-light text-sm absolute p-5 top-16">
                {desc}
            </span>
            <a
                className="block text-left absolute bottom-5 left-5"
                href={`tel:${phone}`}
            >
                {phone}
            </a>
        </div>
    )
}
