import Sidebar, { CategoryItem } from '@/components/layout/Sidebar'
import { useSidebarContext } from '@/hooks/useSidebarContext'
import { sidebarCategories } from '@/utils/constants'
import Header from './Header'
import { Outlet } from 'react-router'

const PageLayout = () => {
    const { toggleSidebarCategory, updateCategory, activeCategory } = useSidebarContext()
    return (
        <div className='flex ' >
            <Sidebar  >
                {sidebarCategories.map(((item, idx) => (
                    <CategoryItem
                        link={item.link}
                        key={idx}
                        icon={item.icon}
                        title={item.title}
                        onClick={() => {
                            updateCategory(item.title)
                            toggleSidebarCategory(true)
                            console.log(item.title)
                        }}
                        isActive={item.title === activeCategory ? true : false}

                    />
                )))}
            </Sidebar>
            <div className='flex-1  text-black min-h-screen'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default PageLayout