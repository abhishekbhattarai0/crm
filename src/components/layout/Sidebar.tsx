import { ArrowDown } from "lucide-react";
import { useSidebarContext } from "../../hooks/useSidebarContext";
import sidebarLogo from "@/assets/download.png";
import { useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { appsCategories, dashboardCategories } from "@/utils/constants";
import { Link, NavLink, } from "react-router";
import IconComponent from "../ui/IconComponent";
import useScreenSize from "@/hooks/useScreenSize";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isSidebarCategoryVisible, activeCategory, toggleSidebarCategory } = useSidebarContext();

  const isMobile = useScreenSize()

  return (
    <>
      <div className="flex border-r border-gray-200 ">
        {/**category menu */}
        <div className="flex h-full w-15 justify-center bg-sky-700">
          <div className="flex flex-col items-center justify-between pt-3">
            {/* category container top */}

            <IconComponent img={sidebarLogo} className="h-9 w-9 rounded-full" />

            {/* category container middle */}
            <div className="mt-20 flex flex-1 flex-col gap-7 text-white">
              {children}
            </div>

            {/* category container bottom */}
            <div className="mb-3">
              {/* <img
                className="h-full w-full rounded-full object-cover"
                src={sidebarLogo}
              /> */}
              <IconComponent img={sidebarLogo} className="h-9" />

            </div>
          </div>
        </div>

        {/**subcategory menu */}
        {isSidebarCategoryVisible && (
          <div className={cn(
            "flex h-full w-40 flex-col overflow-x-hidden overflow-y-auto bg-blue-100 pb-4 ",
            isMobile && 'fixed left-15'
          )}>


            {/** subcategory container heading */}

            <div className="absolute z-100">
              <div className="flex h-12  items-center   text-center text-lg font-semibold text-gray-600">
                {isMobile && <IconComponent className='sm:ml-1 h-9 w-9 ml-3 mt-1 bg-gray-300/50 rounded-full' Icon={GiHamburgerMenu} onClick={() => toggleSidebarCategory()} />}
                <p className="flex h-12 w-40 items-center pl-2  bg-sky-100 text-center text-lg font-semibold text-gray-600">
                  Company
                </p>
              </div>
            </div>

            {/** subcategory container body */}
            <div className="mt-14 text-black ">
              <div>
                <h1 className="bg-sky-200 p-2 font-bold text-gray-800/90">
                  {activeCategory}
                </h1>
              </div>
              <div className="mt-4 flex flex-col gap-4 pl-4 text-gray-800">
                {activeCategory === "Dashboard" &&
                  dashboardCategories.map((item, idx) => (
                    <SubCategoryItem key={idx} text={item.title} />
                  ))}

                {activeCategory === "Apps" &&
                  appsCategories.map((item, idx) => (
                    <SubCategoryItem
                      key={idx}
                      text={item.title}
                      subItems={item.children ? item.children : []}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;

interface CategoryItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  isActive: boolean;
  link: string;
  onClick?: () => void;
}

export const CategoryItem = ({
  icon: Icon,
  title,
  isActive,
  link,
  ...props
}: CategoryItemProps) => {
  return (
    <Link
      to={link}
      className={cn(
        "group relative cursor-pointer rounded-md bg-sky-600/30 px-3 py-2 hover:bg-sky-600",
        isActive && "bg-sky-800",
      )}
      {...props}
    >
      <Icon className="size-5" />
      <div className="absolute top-2 left-14 hidden rounded bg-sky-300 px-1 text-xs font-medium text-black group-hover:block">
        {title}
      </div>
      {isActive && (
        <div className="absolute top-3 left-11 h-0 w-0 border-t-8 border-r-8 border-b-8 border-t-transparent border-r-white border-b-transparent"></div>
      )}
    </Link>
  );
};

interface Item {
  title: string;
  link: string;
}

export const SubCategoryItem = ({
  text,
  subItems,
}: {
  text: string;
  subItems?: Item[];
}) => {
  const { updateActiveSubCategory, activeCategory } = useSidebarContext();
  const [isSubitemActive, setIsSubitemActive] = useState<boolean>(false);


  return (
    <div
      onClick={() => {
        updateActiveSubCategory(text);
        // setIsSubitemActive(prev => !prev)
      }}
    >
      <div
        className={cn(
          "w-full cursor-pointer text-sm font-semibold text-gray-700 hover:text-blue-600",
          "flex items-center justify-between gap-2 pr-2",
        )}
        onClick={() => setIsSubitemActive((prev) => !prev)}
      >
        <NavLink to={`/${activeCategory}/${text}`}
          // style={{
          //   color: isSubitemActive ? 'blue' : ''
          // }}
          style={({ isActive }) => ({
            color: isActive ? 'blue' : ''
          })}
        >
          {text}
        </NavLink>


        {subItems?.length ? (
          <div
            className={cn(
              "transition-transform duration-100 ease-in-out",
              isSubitemActive ? "rotate-180" : "rotate-0",
            )}
          >
            <ArrowDown size={14} />
          </div>
        ) : null}
      </div>


      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isSubitemActive ? "max-h-40" : "max-h-0",
        )}
      >
        {subItems &&
          subItems.map((subitem) => (
            <div
              key={subitem.title}

            >

              <NavLink
                onClick={() => { console.log(`/${activeCategory}/${text}/${subitem.link}`) }}
                to={`/${activeCategory}/${text}/${subitem.link}`}
                className="w-full cursor-pointer pt-1.5 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600"
                style={({ isActive }) => ({
                  color: isActive ? '#2E8699' : ''
                })}
              >
                {subitem.title}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
