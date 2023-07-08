import Advantage from '@/components/Advantage'
import Section from '@/components/Section'
import { BsCheck2All } from 'react-icons/bs'

export default function AdvantagesSection() {
    return (
        <Section>
            <div className="min-h-screen flex items-center justify-center text-white flex-col gap-10">
                <div className="text-5xl">טיפול ב...</div>
                <div className="flex flex-col gap-4 px-9">
                    <Advantage>
                        <BsCheck2All />
                        <span> חרדות</span>
                    </Advantage>

                    <Advantage>
                        <BsCheck2All />
                        <span> פוסט-טראומה</span>
                    </Advantage>
                    <Advantage>
                        <BsCheck2All />
                        <span>דיכאון</span>
                    </Advantage>
                    <Advantage>
                        <BsCheck2All />
                        <span>כפייתיות</span>
                    </Advantage>
                    <Advantage>
                        <BsCheck2All />
                        <span>ביטחון עצמי</span>
                    </Advantage>
                    <Advantage>
                        <BsCheck2All />
                        <span>מחשבות טורדניות </span>
                    </Advantage>
                    <Advantage>
                        <BsCheck2All />
                        <span>ייעוץ זוגי </span>
                    </Advantage>
                </div>
            </div>
        </Section>
    )
}
