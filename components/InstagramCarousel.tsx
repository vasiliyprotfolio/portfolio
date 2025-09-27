'use client'
import {instagram} from '../lib/instagram'
import Image from 'next/image'
import {Instagram} from 'lucide-react'

export default function InstagramCarousel() {
    const duplicatedItems = [...instagram, ...instagram];

    return (
        <section id="instagram" className="py-16 md:py-24 max-w-full">
            <div className="md:px-4 mx-auto container">
                <div className="flex items-center justify-between mb-8 px-4 md:px-0">
                    <div className="flex items-center space-x-3">
                        <div
                            className="w-12 h-12 bg-gradient-to-tr from-brand via-white to-brand rounded-full flex items-center justify-center">
                            <Instagram className="h-6 w-6 text-white"/>
                        </div>
                        <h2 className="text-2xl font-semibold">Instagram</h2>
                    </div>
                    <a href="https://www.instagram.com/fizor_vasyl/" target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand">
                        <Instagram className="h-4 w-4"/> Переглянути профіль
                    </a>
                </div>

                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
                    {/* Gradient overlays for smooth edges */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="flex animate-marquee-endless py-8 md:px-4" style={{width: 'max-content'}}>
                        {duplicatedItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="instagram-item relative block h-80 w-64 shrink-0 overflow-hidden rounded-xl mx-3 group"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt ?? 'Instagram'}
                                    width={500}
                                    height={500}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={idx < 2}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay with Instagram icon */}
                                <div
                                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300 flex items-center justify-center">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                                        <Instagram className="h-6 w-6 text-white"/>
                                    </div>
                                </div>

                                {/* Alt text overlay */}
                                {item.alt && (
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                        <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {item.alt}
                                        </p>
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                    <p>Натисніть, щоб відкрити оригінальний пост в новому вікні</p>
                    <div className="w-2 h-2 bg-brand rounded-full animate-pulse delay-75"></div>
                </div>
            </div>
        </section>
    )
}
