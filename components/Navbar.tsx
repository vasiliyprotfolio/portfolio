// components/Navbar.tsx
'use client'
import Link from 'next/link'
import {useState} from 'react'
import {Sheet, SheetTrigger, SheetContent, SheetClose} from './ui/sheet'
import {Menu, Phone} from 'lucide-react'
import {cn} from '../lib/utils'

const links = [
    {href: '#about', label: 'Про лікаря'},
    {href: '#edu', label: 'Освіта'},
    {href: '#reviews', label: 'Відгуки'},
    {href: '#instagram', label: 'Instagram'},
    {href: '#faq', label: 'FAQ'},
    {href: '#contact', label: 'Контакти'},
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed inset-x-0 top-0 z-40 max-w-full px-4">
            <div
                className={cn(
                    'mt-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-opacity duration-300',
                    open ? 'opacity-0 pointer-events-none' : 'opacity-100'
                )}
            >
                <nav className="flex h-14 items-center justify-between px-5">
                    <Link href="#" className="text-sm font-semibold">
                        Фізор&nbsp;Василь
                    </Link>

                    {/* Show full nav from lg and up (earlier switch to sheet) */}
                    <div className="hidden gap-6 lg:flex">
                        {links.map((l) => (
                            <a key={l.href} href={l.href} className="py-2 text-sm text-gray-700 hover:text-brand">
                                {l.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Phone pill only on lg+ */}
                        <a
                            href="tel:+380502626666"
                            className="hidden items-center gap-1 rounded-full bg-brand px-3 py-1.5 text-xs font-medium text-white hover:bg-brand/90 lg:inline-flex"
                        >
                            <Phone className="h-4 w-4"/> 050-262-66-66
                        </a>

                        {/* Mobile menu (Sheet) */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger
                                aria-label="Відкрити меню"
                                aria-expanded={open}
                                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 focus:ring-2 focus:ring-brand/30 lg:hidden"
                            >
                                <Menu className="h-5 w-5"/>
                            </SheetTrigger>

                            <SheetContent className="overflow-y-auto py-4">
                                <div className="flex flex-col">
                                    {/* Navigation links */}
                                    <nav className="flex-1">
                                        <div className="flex flex-col space-y-1">
                                            {links.map((l) => (
                                                <SheetClose asChild key={l.href}>
                                                    <a
                                                        href={l.href}
                                                        className="flex items-center px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-brand transition-colors duration-200"
                                                    >
                                                        {l.label}
                                                    </a>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </nav>

                                    {/* Contact section */}
                                    <div className="border-t border-gray-100 pt-6 pb-6">
                                        <div className="space-y-3">
                                            <p className="text-sm font-medium text-gray-500 px-3">Зв'язок</p>
                                            <a
                                                href="tel:+380502626666"
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brand text-white font-medium hover:bg-brand/90 transition-colors duration-200"
                                            >
                                                <Phone className="h-5 w-5"/>
                                                050-262-66-66
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </div>
    )
}
