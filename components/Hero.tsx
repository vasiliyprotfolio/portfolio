// components/Hero.tsx
'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {Button} from './ui/button'
import {Phone, Facebook, Instagram, Sparkles} from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative flex min-h-[88vh] items-center pt-24 px-0 sm:px-4">
            {/* soft gradient rings */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-[-10%] top-[-20%] h-[50vh] w-[60vw] rounded-full bg-brand/10 blur-3xl"/>
                <div
                    className="absolute right-[-10%] bottom-[-20%] h-[40vh] w-[50vw] rounded-full bg-brand/10 blur-3xl"/>
            </div>

            <div className="container grid items-center gap-10 md:grid-cols-2">
                <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6}}
                            className="space-y-6">
          <span
              className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <Sparkles className="h-3.5 w-3.5"/> Ортопед-травматолог • Дитяча ортопедія • Хірург
          </span>
                    <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Фізор Василь Дмитрович</h1>
                    <p className="max-w-xl text-base text-gray-600">
                        Сучасне лікування травм і захворювань суглобів: ендопротезування, артроскопія,
                        металоостеосинтез, дитяча ортопедія та спортивні травми.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <a href="#contact">
                            <Button className="shadow">Записатися на консультацію</Button>
                        </a>
                        <a href="tel:+380502626666">
                            <Button variant="outline">
                                <Phone className="mr-2 h-4 w-4"/> 050-262-66-66
                            </Button>
                        </a>
                    </div>
                    <div className="flex items-center gap-4 pt-2 text-sm text-gray-600">
                        <a className="inline-flex items-center gap-2 hover:text-brand"
                           href="https://www.facebook.com/vasilii.vetochkoff" target="_blank" rel="noreferrer">
                            <Facebook className="h-4 w-4"/> Facebook
                        </a>
                        <a className="inline-flex items-center gap-2 hover:text-brand"
                           href="https://www.instagram.com/fizor_vasyl/" target="_blank" rel="noreferrer">
                            <Instagram className="h-4 w-4"/> Instagram
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.98}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.7, delay: 0.1}}
                    whileHover={{scale: 1.02}}
                    className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl border border-gray-100 shadow-xl lg:shadow-2xl"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1622782914767-404fb9aaf1bb?q=80&w=1200&auto=format&fit=crop"
                        alt="Orthopedics"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* soft pulse ring */}
                    <motion.div
                        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-brand/20"
                        animate={{boxShadow: ['0 0 0 0 rgba(19,99,223,0.35)', '0 0 0 14px rgba(19,99,223,0.00)']}}
                        transition={{repeat: Infinity, duration: 2.8, ease: 'easeOut'}}
                    />
                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/0"/>
                </motion.div>
            </div>

            {/* smoother seam into next section */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white to-transparent"/>
        </section>
    )
}
