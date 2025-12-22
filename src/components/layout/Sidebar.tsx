import { ArrowDown, LayoutGridIcon, type LucideIcon } from "lucide-react"
import { useSidebarContext } from "../../hooks/useSidebarContext"
import sidebarLogo from '@/assets/download.png'
import { useState, type ReactNode } from "react"
import { cn } from "@/utils/cn"
import { appsCategories, dashboardCategories } from "@/utils/constants"


const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isSidebarCategoryVisible, activeCategory } = useSidebarContext()




  return (
    <>
      <div className="flex border-r border-gray-200 ">

        {/**category menu */}
        <div className="w-15 bg-sky-700 h-screen flex  justify-center">

          <div className="flex flex-col justify-between items-center">
            {/* category container top */}

            <div className="mt-2 size-8 bg">
              {/* <img className=" h-full w-full object-cover " src={sidebarLogo} /> */}
              <LayoutGridIcon />

            </div>

            {/* category container middle */}
            <div className="flex-1 mt-20 flex flex-col gap-7 text-white">
              {children}
            </div>

            {/* category container bottom */}
            <div className="mb-2 size-10 ">
              <img className=" h-full w-full object-cover rounded-full " src={sidebarLogo} />
            </div>

          </div>
        </div>



        {/**subcategory menu */}
        {isSidebarCategoryVisible &&
          (<div className="w-40 pb-4 bg-blue-100 h-screen flex flex-col pl-2 overflow-y-auto overflow-x-hidden ">
            {/* (<div className={cn(
            "w-38 pb-4 bg-blue-100 h-screen flex flex-col pl-2 overflow-y-auto overflow-x-hidden transition-transform duration-100 ease-in-out",
            isSidebarCategoryVisible ? "w-38" : "w-0"
          )}> */}


            { /** subcategory container heading */}
            <div className="absolute">
              <p className="mt-2 text-lg font-semibold text-gray-600  ">
                Company
              </p>
            </div>

            { /** subcategory container body */}
            <div className="mt-12 text-black">
              <div >
                <h1 className="p-2 bg-sky-200  font-bold text-gray-800/90">{activeCategory}</h1>
              </div>
              <div className="pl-4 mt-4 text-gray-800 flex flex-col gap-4 ">
                {activeCategory === 'Dashboard' && (
                  dashboardCategories.map((item, idx) => (
                    <SubCategoryItem key={idx} text={item.title} />

                  ))
                )}

                {activeCategory === 'Apps' && (
                  appsCategories.map((item, idx) => (
                    <SubCategoryItem key={idx} text={item.title} subItems={item.children ? item.children : []} />
                  ))
                )}

              </div>
            </div>

          </div>)}
      </div>


    </>
  )
}

export default Sidebar

interface CategoryItemProps {
  icon: LucideIcon
  title: string
  isActive: boolean
  onClick?: () => void
}

export const CategoryItem = ({ icon: Icon, title, isActive, ...props }: CategoryItemProps) => {
  return (
    <div className={cn(
      "relative cursor-pointer group px-3 py-2 rounded-md hover:bg-sky-600 bg-sky-600/30",
    )}
      {...props}
    >
      <Icon className="size-5 " />
      <div className="absolute top-2  left-14 bg-sky-300 text-xs font-medium  hidden text-black px-1 rounded   group-hover:block">{title}</div>
      {isActive && <div className="w-0 h-0
            border-t-8 border-t-transparent
            border-b-8 border-b-transparent
            border-r-8 border-r-white absolute top-3 left-11">
      </div>}
    </div>
  )
}

interface Item {
  title: string,
  link: string
}


export const SubCategoryItem = ({
  text,
  subItems
}: {
  text: string,
  subItems?: Item[]
}) => {
  const { updateActiveSubCategory } = useSidebarContext();
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div onClick={() => {
      updateActiveSubCategory(text)
      // setIsActive(prev => !prev)

    }}>
      <div className={cn(
        "w-full hover:text-blue-600 cursor-pointer text-gray-700 text-sm font-semibold",
        "flex gap-2 items-center justify-between pr-2"
      )}
        onClick={() => setIsActive(prev => !prev)}
      >
        {text}
        {/* <div className="transition-all duration-300">
          {subItems && subItems.length > 0 && (isActive
            ? <ArrowUp size={14} />
            : <ArrowDown size={14} />)}
        </div> */}

        {subItems?.length ? (
          <div
            className={cn(
              "transition-transform duration-100 ease-in-out",
              isActive ? "rotate-180" : "rotate-0"
            )}
          >
            <ArrowDown size={14} />
          </div>
        ) : null}
      </div>
      {/* {
        subItems && subItems.length > 0 && isActive && subItems.map((item) => (
          <div key={item.title} className={cn(
            "w-full hover:text-blue-600 cursor-pointer text-gray-700 text-sm font-medium pl-4 pt-1.5"
          )}>
            {item.title}
          </div>
        ))
      } */}

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isActive ? "max-h-40" : "max-h-0"
        )}
      >
        {subItems && subItems.map(item => (
          <div
            key={item.title}
            className="w-full hover:text-blue-600 cursor-pointer text-gray-700 text-sm font-medium pl-4 pt-1.5"
          >
            {item.title}
          </div>
        ))}
      </div>
    </div >
  )
}


