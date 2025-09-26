// components/Navbar.tsx
'use client'
import Link from 'next/link'
import {useState} from 'react'
import {Sheet, SheetTrigger, SheetContent, SheetClose} from './ui/sheet'
import {Menu, Phone} from 'lucide-react'
import {cn} from '../lib/utils'

const links = [
    {href: '#about', label: 'Про лікаря'},
    {href: '#services', label: 'Послуги'},
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

                            <SheetContent>
                                <div className="mt-10 flex flex-col gap-4">
                                    {links.map((l) => (
                                        <SheetClose asChild key={l.href}>
                                            <a href={l.href} className="text-base text-gray-900">
                                                {l.label}
                                            </a>
                                        </SheetClose>
                                    ))}
                                    <a href="tel:+380502626666"
                                       className="mt-2 inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-white">
                                        <Phone className="h-5 w-5"/> 050-262-66-66
                                    </a>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </div>
    )
}
