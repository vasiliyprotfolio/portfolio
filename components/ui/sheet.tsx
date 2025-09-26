// components/ui/sheet.tsx
'use client'
import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {cn} from '../../lib/utils'

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
                    'data-[state=open]:animate-[overlay-enter_300ms_cubic-bezier(0.16,1,0.3,1)]',
                    'data-[state=closed]:animate-[overlay-exit_220ms_cubic-bezier(0.16,1,0.3,1)]'
                )}
            />
            {/* Slide-in panel with capped width on small screens */}
            <Dialog.Content
                className={cn(
                    'fixed right-0 top-0 z-[80] h-full w-[88vw] max-w-[360px] sm:w-80 bg-white p-6 shadow-xl outline-none',
                    // Keyframe-driven entrance/exit so it animates reliably even on first mount
                    'data-[state=open]:animate-[sheet-enter_320ms_cubic-bezier(0.16,1,0.3,1)]',
                    'data-[state=closed]:animate-[sheet-exit_240ms_cubic-bezier(0.16,1,0.3,1)]',
                    'will-change-transform overscroll-contain',
                    className
                )}
            >
                <Dialog.Title className="sr-only">Меню навігації</Dialog.Title>
                {children}
            </Dialog.Content>
        </Dialog.Portal>
    )
}
