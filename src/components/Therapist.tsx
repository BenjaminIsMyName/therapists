import { Noto_Sans, Rubik_Dirt } from 'next/font/google'
const notoSans = Noto_Sans({ subsets: ['latin'], weight: '900' })
const rubik = Rubik_Dirt({ subsets: ['hebrew'], weight: '400' })

export default function Package({
    name,
    desc,
}: {
    name: string
    desc: string
}) {
    return (
        <div
            className={`w-52 h-52 flex flex-col gap-4 items-center justify-center ${notoSans.className}
            relative 
            before:content-[''] before:bg-white/20 before:backdrop-blur-md 
            before:absolute before:inset-0 before:z-[-1] before:rounded-2xl
            `}
        >
            <span className="font-light text-sm absolute bottom-4">{desc}</span>
            <span
                className={`font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-100 to-white text-xl ${rubik.className}
                `}
            >
                {name}
            </span>
        </div>
    )
}
