'use client'
import {useRef} from 'react'
import {reviews} from '../lib/reviews'
import {Card, CardContent, CardHeader} from './ui/card'
import {Quote, ChevronLeft, ChevronRight} from 'lucide-react'
import {motion} from 'framer-motion'

export default function Reviews() {
    const ref = useRef<HTMLDivElement>(null)
    const scrollBy = (delta: number) => {
        const el = ref.current
        if (!el) return
        el.scrollBy({left: delta, behavior: 'smooth'})
    }
    return (
        <section id="reviews" className="py-16 md:py-24">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">Відгуки пацієнтів</h2>
                        <p className="mt-1 text-gray-600">Реальні історії одужання та досвід пацієнтів.</p>
                    </div>
                    <div className="hidden gap-2 md:flex">
                        <button aria-label="Попередній" onClick={() => scrollBy(-320)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <ChevronLeft className="h-5 w-5"/>
                        </button>
                        <button aria-label="Наступний" onClick={() => scrollBy(320)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <ChevronRight className="h-5 w-5"/>
                        </button>
                    </div>
                </div>

                <div className="relative mt-6">
                    <div ref={ref}
                         className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-px-4 px-1 py-2">
                        {reviews.map((r, i) => (
                            <motion.div key={i}
                                        initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}}
                                        viewport={{once: true}} transition={{duration: 0.35, delay: i * 0.04}}
                                        className="snap-start shrink-0 basis-[88%] sm:basis-[46%] md:basis-[31%]"
                            >
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className="flex items-center gap-2 text-brand"><Quote className="h-4 w-4"/><span
                                            className="text-sm font-medium">{r.name}</span></div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">{r.text}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
                        <button aria-label="Попередній" onClick={() => scrollBy(-280)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <ChevronLeft className="h-5 w-5"/>
                        </button>
                        <button aria-label="Наступний" onClick={() => scrollBy(280)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <ChevronRight className="h-5 w-5"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
