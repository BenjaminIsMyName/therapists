import Section from '@/components/Section'
import { Noto_Sans } from 'next/font/google'
import { Rubik_Vinyl } from 'next/font/google'
import { GiOnTarget } from 'react-icons/gi'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '900' })
const notoSansRegular = Noto_Sans({ subsets: ['latin'], weight: '400' })
const solitreo = Rubik_Vinyl({ subsets: ['hebrew'], weight: '400' })

export default function WelcomeSection() {
    return (
        <Section>
            <div className="min-h-screen flex items-center justify-center text-white">
                <div>
                    <div className="flex sm:gap-4 items-baseline justify-center">
                        <GiOnTarget className="w-10 h-10 md:w-24 md:h-24 self-end" />
                        <h1
                            className={`${notoSans.className} text-4xl md:text-9xl text-center tracking-widest`}
                        >
                            <span>מכון</span>{' '}
                            <span className={`${solitreo.className}`}>
                                איכות
                            </span>
                        </h1>
                    </div>
                    <br />
                    <h2
                        className={`${notoSansRegular.className} text-xl md:text-4xl text-end px-8`}
                    >
                        אפשר גם אחרת
                    </h2>
                </div>
                <p
                    className={`${notoSansRegular.className} text-md md:text-2xl text-center absolute bottom-14 left-1/2 -translate-x-1/2
                    w-11/12 md:w-1/2`}
                >
                    טיפול CBT קוגנטיבי-התנהגותי ושיטות פורצות דרך ייחודיות ברוח
                    היהדות שיתנו לכם מענה למגוון בעיות
                </p>
            </div>
        </Section>
    )
}
