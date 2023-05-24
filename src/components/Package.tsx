import { Noto_Sans } from 'next/font/google'
const notoSans = Noto_Sans({ subsets: ['latin'], weight: '900' })
export default function Package({ name }: { name: string }) {
    return (
        <div
            className={`bg-white/30 w-52 h-52 rounded-2xl flex flex-col gap-4 items-center justify-center ${notoSans.className}`}
        >
            <span>{name}</span>

            <span className="font-light text-sm">הצטרף כדי לקבל הצעת מחיר</span>
        </div>
    )
}
