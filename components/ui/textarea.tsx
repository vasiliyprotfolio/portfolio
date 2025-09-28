import * as React from 'react'
import {cn} from '../../lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({className, ...props}, ref) => (
        <textarea
            ref={ref}
            className={cn('w-full min-h-[120px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-base placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 transition', className)}
            {...props}
        />
    )
)
Textarea.displayName = 'Textarea'
