"use client"
import {faqs} from "../lib/faq"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "./ui/accordion"
import {motion} from "framer-motion"
import {MessageCircleQuestion, Lightbulb} from "lucide-react"

// Вынесем анимацию контейнера наружу для оптимизации
const containerVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
}

export default function FAQ() {
    return (
        <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={containerVariants}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <MessageCircleQuestion className="h-6 w-6 text-brand"/>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-pretty">Відповіді на ваші запитання</h2>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Зібрав найчастіші запитання від пацієнтів. Якщо не знайшли відповідь — завжди можете
                        зателефонувати або
                        написати мені особисто.
                    </p>
                </motion.div>

                <div className="mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={containerVariants}
                        className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm transform-gpu"
                    >
                        {/* Используем только одну анимацию для всего аккордеона */}
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((f, i) => (
                                <AccordionItem
                                    key={`faq-${i}`}
                                    value={`item-${i}`}
                                    className="border border-gray-100 rounded-2xl px-6 py-2 bg-gray-50/50 hover:bg-gray-50 transition-colors transform-gpu"
                                >
                                    <AccordionTrigger
                                        className="text-left hover:no-underline py-4 select-none"
                                    >
                                        <div className="flex items-center justify-start gap-3">
                                            <Lightbulb className="h-5 w-5 text-brand mt-0.5 flex-shrink-0"/>
                                            <span className="font-medium text-pretty">{f.q}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-4">
                                        <div className="pl-8 pr-4">
                                            <p className="text-gray-700 leading-relaxed text-pretty">{f.a}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}