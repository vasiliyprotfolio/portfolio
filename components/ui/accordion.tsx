'use client'
import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {ChevronDown} from 'lucide-react'
import {cn} from '../../lib/utils'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = ({className, ...props}: AccordionPrimitive.AccordionItemProps) => (
    <AccordionPrimitive.Item className={cn('border-b border-gray-200', className)} {...props} />
)
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionPrimitive.AccordionTriggerProps>(
    ({className, children, ...props}, ref) => (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    // add "group" so we can style children based on data-state on the trigger
                    'group flex flex-1 items-center justify-between py-4 text-left text-base font-medium transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                    className
                )}
                {...props}
            >
                <span className="flex-1 pr-4 text-left">{children}</span>
                <ChevronDown
                    className={
                        // rotate the icon when the trigger is open
                        'h-5 w-5 shrink-0 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180'
                    }
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
)
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionPrimitive.AccordionContentProps>(
    ({className, children, ...props}, ref) => (
        <AccordionPrimitive.Content
            ref={ref}
            className={cn(
                'overflow-hidden text-gray-700 data-[state=open]:animate-[accordion-down_300ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-in]',
                className
            )}
            style={
                {
                    '--radix-accordion-content-height': 'var(--radix-accordion-content-height)',
                } as React.CSSProperties
            }
            {...props}
        >
            <div className="pb-4 pt-1 text-sm leading-relaxed will-change-auto">{children}</div>
        </AccordionPrimitive.Content>
    )
)
AccordionContent.displayName = 'AccordionContent'
