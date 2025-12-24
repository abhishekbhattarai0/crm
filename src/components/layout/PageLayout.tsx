import Sidebar, { CategoryItem } from '@/components/layout/Sidebar'
import { useSidebarContext } from '@/hooks/useSidebarContext'
import { sidebarCategories } from '@/utils/constants'
import Header from './Header'
import { Outlet } from 'react-router'




const PageLayout = () => {
    const {
        toggleSidebarCategory,
        updateCategory,
        //    activeCategory 
    } = useSidebarContext()

    return (
        <div className="flex h-screen">
            {/* Sidebar: fixed width, full height */}
            <Sidebar >
                {sidebarCategories.map((item, idx) => (
                    <CategoryItem
                        key={idx}
                        link={item.link}
                        icon={item.icon}
                        title={item.title}
                        onClick={() => {
                            updateCategory(item.title)
                            toggleSidebarCategory(true)
                        }}
                    // isActive={item.title === activeCategory}
                    />
                ))}
            </Sidebar>

            {/* Main content: margin-left = sidebar width */}
            <div className="flex-1 flex flex-col  h-screen">
                <Header />

                {/* Scrollable content */}
                <main className="flex-1 overflow-auto pt-4 bg-gray-100">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default PageLayout