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
                        phone="050-339-3844"
                    />
                    <Therapist
                        name="מרים סעדה"
                        desc={'טיפול קוגנטיבי-התנהגותי (CBT), ממוקד ויעיל'}
                        phone="052-765-8487"
                    />
                    <Therapist
                        name="אורלי חיה"
                        desc={'למידה מותאמת עבור ילדים עם קושי בלמידה'}
                        phone="058-508-5176"
                    />
                </div>
            </div>
        </Section>
    )
}
