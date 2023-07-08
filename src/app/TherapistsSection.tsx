import Package from '@/components/Package'
import Section from '@/components/Section'
import Therapist from '@/components/Therapist'

export default function TherapistsSection() {
    return (
        <Section>
            <div
                id="therapists-section"
                className="min-h-screen flex flex-col gap-16 items-center justify-center text-white py-44 md:py-0"
            >
                <div className="text-5xl text-center">המטפלים שלנו</div>
                <div className="flex gap-5 flex-col md:flex-row">
                    <Therapist
                        name="ש.ג. באר שבע"
                        desc={'סבלתי מחרדות קשות, ולאחר הטיפול היה שיפור מדהים'}
                    />
                    <Therapist
                        name="ב.ל. נתיבות "
                        desc={
                            'עברתי משבר קשה, נכנסתי לדיכאון... בס"ד הטיפול הציל את חיי'
                        }
                    />
                    <Therapist
                        name="א.ב. ניר משה "
                        desc={
                            "בילדותי חוויתי טראומה שפתאום צפה לי והפריעה לי למהלך חיי, וברוך ה' היום לאחר הטיפול אני משוחררת לגמריי! תודה "
                        }
                    />
                </div>
            </div>
        </Section>
    )
}
