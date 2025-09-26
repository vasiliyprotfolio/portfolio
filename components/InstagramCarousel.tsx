'use client'
import {instagram} from '../lib/instagram'
import Image from 'next/image'
import {Instagram} from 'lucide-react'

export default function InstagramCarousel() {
    const doubled = [...instagram, ...instagram]
    return (
        <section id="instagram" className="py-16 md:py-24 max-w-full">
            <div className="container">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Instagram</h2>
                    <a href="https://www.instagram.com/fizor_vasyl/" target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand">
                        <Instagram className="h-4 w-4"/> Переглянути профіль
                    </a>
                </div>

                <div className="relative mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-white">
                    <div className="flex animate-marquee [--gap:16px]" style={{gap: '16px'}}>
                        {doubled.map((i, idx) => (
                            <a key={idx} href={i.href} target="_blank" rel="noreferrer"
                               className="relative block h-56 w-56 shrink-0 overflow-hidden rounded-xl">
                                <Image src={i.src} alt={i.alt ?? 'Instagram'} fill className="object-cover"/>
                            </a>
                        ))}
                    </div>
                </div>
                <p className="mt-3 text-xs text-gray-500">* Натисніть, щоб відкрити оригінальний пост в новому
                    вікні.</p>
            </div>
        </section>
    )
}
