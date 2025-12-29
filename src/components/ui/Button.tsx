// import { cn } from '@/utils/cn'

import { cn } from '@/utils/cn'
import React from 'react'

const Button = ({ className, type, ...props }: React.ComponentProps<"button">) => {
  return (
    <button
      type={type}
      className={cn(
        "bg-sky-600 py-2 text-sm  font-medium tracking-wide text-white hover:bg-sky-700 cursor-pointer ",
        className
      )}
      {...props}
    ></button>
  )
}

export default Button
