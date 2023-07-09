import { motion as m } from 'framer-motion'

export default function Advantage({
    children,
    delay,
}: {
    children: React.ReactNode
    delay: number
}) {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay * 0.3 }}
            className="flex gap-4 items-center text-xl"
        >
            {children}
        </m.div>
    )
}
