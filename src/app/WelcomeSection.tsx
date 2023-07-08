import Section from '@/components/Section'
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '900' })
const notoSansRegular = Noto_Sans({ subsets: ['latin'], weight: '400' })

export default function WelcomeSection() {
    return (
        <Section>
            <div className="h-screen flex items-center justify-center text-white">
                <div>
                    <div className="flex gap-4 items-baseline justify-center">
                        <svg
                            className="w-10 h-10 md:w-24 md:h-24 self-end"
                            xmlns="http://www.w3.org/2000/svg"
                            width="150"
                            height="150"
                            viewBox="0 0 150 150"
                        >
                            <path
                                id="Path_19"
                                data-name="Path 19"
                                d="M0,0H33.414l7.722,21.855V0H81.287l19.3,95.21L97.5,0H150V150H0Z"
                                fill="#fff"
                            />
                        </svg>
                        <h1
                            className={`${notoSans.className} text-4xl md:text-9xl text-center tracking-widest`}
                        >
                            בריאות הנפש
                        </h1>
                    </div>
                    <br />
                    <h2
                        className={`${notoSansRegular.className} text-xl md:text-4xl text-center px-8`}
                    >
                        מכון לטיפול בחרדות, דיכאון בעיות בזוגיות ועוד
                    </h2>
                </div>
            </div>
        </Section>
    )
}
