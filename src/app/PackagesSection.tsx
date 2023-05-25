import Package from '@/components/Package'
import Section from '@/components/Section'

export default function PackagesSection() {
    return (
        <Section>
            <div className="h-screen flex items-center justify-center text-white">
                <div className="flex gap-5 flex-col md:flex-row">
                    <Package name="חבילה בסיסית" />
                    <Package name="חבילה רגילה" />
                    <Package name="חבילה מורחבת" />
                </div>
            </div>
        </Section>
    )
}
