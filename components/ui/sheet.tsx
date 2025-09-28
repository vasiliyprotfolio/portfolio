// components/ui/sheet.tsx
'use client'
import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {cn} from '../../lib/utils'
import {X} from 'lucide-react'


export function Sheet(props: React.ComponentProps<typeof Dialog.Root>) {
    return <Dialog.Root {...props} />
}

export const SheetTrigger = Dialog.Trigger
export const SheetClose = Dialog.Close

export function SheetContent({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <Dialog.Portal>
            {/* Smooth overlay fade (open/close) */}
            <Dialog.Overlay
                className={cn(
                    'fixed inset-0 z-[70] bg-black/40',
                    'data-[state=open]:animate-[overlay-enter_320ms_cubic-bezier(0.16,1,0.3,1)]',
                    'data-[state=closed]:animate-[overlay-exit_240ms_cubic-bezier(0.16,1,0.3,1)]'
                )}
            />
            {/* Slide-in panel with capped width on small screens */}
            <Dialog.Content
                className={cn(
                    'fixed right-0 top-0 z-[80] h-full w-[88vw] max-w-[360px] sm:w-80 bg-white px-6 py-4 shadow-xl outline-none',
                    // Keyframe-driven entrance/exit so it animates reliably even on first mount
                    'data-[state=open]:animate-[sheet-enter_320ms_cubic-bezier(0.16,1,0.3,1)]',
                    'data-[state=closed]:animate-[sheet-exit_240ms_cubic-bezier(0.16,1,0.3,1)]',
                    'will-change-transform overscroll-contain',
                    className
                )}
            >
                <div className="flex items-center justify-between border-b border-gray-100 px-2 py-4">
                    <div>
                        <Dialog.Title className="text-lg font-semibold text-gray-900">
                            Фізор Василь
                        </Dialog.Title>
                        <Dialog.Description className="sr-only">
                            Навігаційне меню з посиланнями на розділи сайту та контактною інформацією
                        </Dialog.Description>
                    </div>
                    <Dialog.Close
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:ring-2 focus:ring-brand/30">
                        <X className="h-4 w-4"/>
                        <span className="sr-only">Закрити</span>
                    </Dialog.Close>
                </div>

                {children}
            </Dialog.Content>
        </Dialog.Portal>
    )
}
