import { ArrowBigDownIcon, ArrowBigUpIcon, LayoutGridIcon, type LucideIcon } from "lucide-react"
import { useSidebarContext } from "../../hooks/useSidebarContext"
import sidebarLogo from '@/assets/download.png'
import { useState, type ReactNode } from "react"
import { cn } from "@/utils/cn"
import { appsCategories, dashboardCategories } from "@/utils/constants"


const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isSidebarCategoryVisible, activeCategory, updateCategory } = useSidebarContext()




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
          (<div className="w-34 bg-blue-100 h-screen flex flex-col pl-2">

            { /** subcategory container heading */}
            <div>
              <p className="mt-2 text-lg font-semibold text-gray-600 ">
                Company
              </p>
            </div>

            { /** subcategory container body */}
            <div className="mt-12 text-black">
              <div>
                <h1 className="text-sm font-semibold text-gray-800/90">Dashboard</h1>
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
                {/* <SubCategoryItem text="Analytics" />
                <SubCategoryItem text="Crypto" />
                <SubCategoryItem text="Crm" />
                <SubCategoryItem text="Project" />
                <SubCategoryItem text="Ecommerce" />
                <SubCategoryItem text="Helpdesk" />
                <SubCategoryItem text="Hospital" /> */}
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
}

export const CategoryItem = ({ icon: Icon, title, ...props }: CategoryItemProps) => {
  return (
    <div className={cn(
      "relative cursor-pointer group px-3 py-2 rounded-md hover:bg-sky-600 bg-sky-600/30",
    )}
      {...props}
    >
      <Icon className="size-5 " />
      <div className="absolute top-2  left-14 bg-sky-300 text-xs font-medium  hidden text-black px-1 rounded   group-hover:block">{title}</div>
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
  const { activeSubCategory, activeCategory, updateActiveSubCategory } = useSidebarContext();
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div onClick={() => updateActiveSubCategory(text)}>
      <div className={cn(
        "w-full hover:text-blue-600 cursor-pointer text-gray-700 text-sm font-medium",
        "flex gap-2 items-center justify-between pr-2"
      )}>
        {text}
        <div onClick={() => setIsActive(prev => !prev)}>
          {subItems && subItems.length > 0 &&
            (activeSubCategory == text
              ? <ArrowBigDownIcon size={14} />
              : <ArrowBigUpIcon size={14} />)}
        </div>
      </div>
      {subItems && subItems.length > 0 && isActive && subItems.map((item, idx) => (
        <div key={idx} className={cn(
          "w-full hover:text-blue-600 cursor-pointer text-gray-700 text-sm font-medium pl-4 pt-1"
        )}>
          {item.title}
        </div>
      ))}
    </div>
  )
}
