import { cn } from '@/utils/cn';
import React from 'react'



function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "border border-sky-100 rounded focus:outline-none focus:ring-1 focus:ring-sky-300 p-2 font-light text-xs",
                className
            )}
            {...props}
        />
    )
}

export { Input }


export default Input