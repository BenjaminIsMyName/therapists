import MySequence from '@/components/MySequence'
import './globals.css'
import { Inter } from 'next/font/google'
import { BiSolidPhoneCall } from 'react-icons/bi'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'מרכז מחשבה',
    description:
        'טיפול CBT קוגנטיבי-התנהגותי ושיטות פורצות דרך ייחודיות ברוח היהדות שיתנו לכם מענה למגוון בעיות',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="he" dir="rtl">
            <body
                dir="rtl"
                className={`${inter.className} bg-gradient-to-b from-[#207EA2] to-[#9B2828] via-[#7844A0]`}
            >
                <a
                    href="#therapists-section"
                    type="button"
                    className="bg-white/50 fixed left-4 top-4 px-4 py-2 rounded-md flex gap-3 justify-center items-center z-20 overflow-hidden
                    after:absolute after:inset-0 after:-z-10 after:bg-yellow-50 after:scale-x-0 after:scale-y-100 after:transition-transform after:origin-left 
                    after:rounded-tr-full after:rounded-br-full hover:after:scale-x-100 hover:after:rounded-md"
                >
                    <BiSolidPhoneCall />
                    <span className="text-sm font-bold">צור קשר</span>
                </a>
                <MySequence />
                {children}
            </body>
        </html>
    )
}
