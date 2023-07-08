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
                        name="אברהם כהן"
                        desc={'יועץ זוגי ותיק ובעל ניסיון, כולל הדרכת חתנים'}
                        phone="050-588-0100"
                    />
                    <Therapist
                        name="מרים סעדה"
                        desc={
                            'מטפלת CBT מקצועית ומנוסת. טיפול בחרדות, דיכאון ועוד'
                        }
                        phone="050-588-0100"
                    />
                    <Therapist
                        name="אורלי כהן"
                        desc={'למידה מותאמת עבור ילדים עם קושי בלמידה'}
                        phone="050-588-0100"
                    />
                </div>
            </div>
        </Section>
    )
}
