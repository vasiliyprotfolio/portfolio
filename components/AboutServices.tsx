// components/AboutServices.tsx
'use client'
import {services} from '../lib/services'
import {motion} from 'framer-motion'
import {Bone, Stethoscope, Activity, Syringe, Wrench, ShieldCheck, Sparkles, CheckCircle2} from 'lucide-react'

const icons = [Bone, Stethoscope, Activity, Syringe, Wrench]

export default function AboutServices() {
    return (
        // subtle overlap removed, smoother fade at top + tighter top spacing
        <section id="about" className="relative pt-6 pb-16 md:pt-10 md:pb-24">
            {/* ultra-smooth layered gradient background + taller top fade */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent"/>
                <div
                    className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(19,99,223,0.10),transparent_60%)]"/>
                <div
                    className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_120%,rgba(19,99,223,0.06),transparent_60%)]"/>
            </div>

            <div className="container">
                {/* refined card look: slightly stronger backdrop, ring & padding */}
                <div
                    className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-100 bg-white/90 p-8 ring-1 ring-black/5 shadow-md backdrop-blur md:p-10">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-brand"/>
                        <h2 className="text-3xl font-semibold tracking-tight">Про лікаря</h2>
                    </div>

                    {/* short subline for consistency */}
                    <p className="mt-2 text-sm text-gray-500">Професійний підхід • Сучасні протоколи • Індивідуальний
                        план лікування</p>

                    <p className="mt-4 text-gray-700">
                        Ортопед-травматолог, хірург, дитячий ортопед-травматолог. Основні напрями: металоостеосинтез,
                        ендопротезування колінного та кульшового суглобів,
                        реконструктивні втручання на стопі, артроскопія, лікування спортивних травм, онкоортопедія та
                        дитяча ортопедія.
                    </p>

                    {/* badges */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {['Дорослі й діти', 'Ендопротезування', 'Артроскопія', 'Дисплазія ТБС', 'Спортивні травми', 'Онкоортопедія'].map((chip, i) => (
                            <motion.span
                                key={chip}
                                initial={{opacity: 0, y: 6}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: i * 0.05}}
                                className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700"
                            >
                                <Sparkles className="h-3.5 w-3.5 text-brand"/> {chip}
                            </motion.span>
                        ))}
                    </div>

                    {/* key points */}
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {[
                            'Індивідуальні плани лікування та реабілітації',
                            'Малоінвазивні методики та швидке відновлення',
                            'Повний супровід спортсменів до повернення у спорт',
                            'Сучасні протоколи при дитячих деформаціях та дисплазії',
                        ].map((t, i) => (
                            <li key={i}
                                className="flex items-start gap-2 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand"/>
                                <span className="text-sm text-gray-700">{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div id="services" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, i) => {
                        const Icon = icons[i % icons.length]
                        return (
                            <motion.div
                                key={s.title}
                                initial={{opacity: 0, y: 16}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: '-20%'}}
                                transition={{duration: 0.4, delay: i * 0.05}}
                                whileHover={{y: -2}}
                                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                        <Icon className="h-5 w-5"/>
                                    </div>
                                    <h3 className="text-base font-semibold">{s.title}</h3>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">{s.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
