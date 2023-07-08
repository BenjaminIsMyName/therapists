import Package from '@/components/Package'
import Section from '@/components/Section'

export default function PackagesSection() {
    return (
        <Section>
            <div className="min-h-screen flex flex-col gap-16 items-center justify-center text-white">
                <div className="text-5xl">המלצות</div>
                <div className="flex gap-5 flex-col md:flex-row">
                    <Package
                        name="ש.ג. באר שבע"
                        desc={'סבלתי מחרדות קשות, ולאחר הטיפול היה שיפור מדהים'}
                    />
                    <Package
                        name="ב.ל. נתיבות "
                        desc={
                            'עברתי משבר קשה, נכנסתי לדיכאון... בס"ד הטיפול הציל את חיי'
                        }
                    />
                    <Package
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
