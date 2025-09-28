// components/AboutServices.tsx
"use client"
import {services} from "../lib/services"
import {motion} from "framer-motion"
import {CheckCircle2, Heart, Users, BookOpen} from "lucide-react"

export default function AboutServices() {
    return (
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
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mx-auto overflow-hidden rounded-3xl border border-gray-100 bg-white/90 p-8 ring-1 ring-black/5 shadow-md backdrop-blur md:p-10"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <Heart className="h-6 w-6 text-brand"/>
                        <h2 className="text-3xl font-semibold tracking-tight">Про мене</h2>
                    </div>

                    {/* personal approach statement */}
                    <div
                        className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-brand/5 to-blue-50 border border-brand/10">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Кожен пацієнт для мене — це унікальна історія, яка потребує індивідуального підходу. Моя
                            мета не просто
                            вилікувати, а повернути вам радість руху та активного життя.
                        </p>
                    </div>

                    {/* professional background with personal touch */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-brand"/>
                                Експертиза
                            </h3>
                            <div className="space-y-3">
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <p className="font-medium text-gray-900">12+ років практичного досвіду</p>
                                    <p className="text-sm text-gray-600">Травматологія та ортопедична хірургія</p>
                                </div>

                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <p className="font-medium text-gray-900">Спеціалізація</p>
                                    <p className="text-sm text-gray-600">Ендопротезування та артроскопічні операції</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <p className="font-medium text-gray-900">Дитяча ортопедія</p>
                                    <p className="text-sm text-gray-600">Спортивна медицина та реабілітація</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Users className="h-5 w-5 text-brand"/>
                                Мій підхід
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Детальна діагностика</p>
                                        <p className="text-sm text-gray-600">Ретельно вивчаю кожен випадок перед
                                            призначенням лікування</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Зрозумілі пояснення</p>
                                        <p className="text-sm text-gray-600">Пояснюю діагноз та план лікування простою
                                            мовою</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Супровід до одужання</p>
                                        <p className="text-sm text-gray-600">Підтримую зв'язок протягом всього періоду
                                            лікування</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* specialization areas with more personal descriptions */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Основні напрями роботи</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {services.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{opacity: 0, y: 10}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: i * 0.05}}
                                    className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    )
}
