import { cn } from '@/utils/cn'
import React, { type ComponentType } from 'react'


const IconComponent = ({ img, className, onClick, Icon, ...props }: {
  img?: string
  className?: string
  Icon?: ComponentType<React.SVGProps<SVGSVGElement>>
  onClick?: () => void
}) => {
  return (
    <div className={cn(" flex items-center justify-center",
      className
    )}
      onClick={onClick}
      {...props}
    >
      {img && <img className=" h-full w-full rounded-full object-cover " src={img} />}
      {/* <img className=" h-9  rounded-full object-cover " src={sidebarLogo} /> */}
      {Icon && <Icon />}
    </div>
  )
}

export default IconComponent
