import React from 'react'
import Sidebar, { CategoryItem } from '@/components/layout/Sidebar'
import { SidebarClose, SidebarOpen } from 'lucide-react'
import { useSidebarContext } from '@/hooks/useSidebarContext'
import { sidebarCategories } from '@/utils/constants'

const PageLayout = () => {
    const { toggleSidebarCategory, isSidebarCategoryVisible, updateCategory, activeCategory } = useSidebarContext()
    return (
        <div className='flex' >
            <Sidebar >
                {sidebarCategories.map(((item, idx) => (
                    <CategoryItem key={idx} icon={item.icon} title={item.title} onClick={() => {
                        updateCategory(item.title)
                        console.log(item.title)
                    }} />
                )))}
            </Sidebar>
            <div className='flex-1  text-black min-h-screen'>
                <button onClick={() => toggleSidebarCategory()}>
                    {isSidebarCategoryVisible ? <SidebarClose /> : <SidebarOpen />}
                </button>
                {activeCategory}
            </div>
        </div>
    )
}

export default PageLayout