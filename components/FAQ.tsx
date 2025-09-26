'use client'
import {faqs} from '../lib/faq'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './ui/accordion'

export default function FAQ() {
    return (
        <section id="faq" className="py-16 md:py-24">
            <div className="container">
                <h2 className="text-2xl font-semibold">FAQ — Поширені запитання</h2>
                <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-4 md:p-6 transform-gpu">
                    <Accordion type="single" collapsible>
                        {faqs.map((f, i) => (
                            <AccordionItem key={`faq-${i}`} value={`item-${i}`} className="transform-gpu">
                                <AccordionTrigger className="touch-manipulation select-none">{f.q}</AccordionTrigger>
                                <AccordionContent>{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}