import { useState } from "react"
import { SidebarContext } from './SidebarContext'
const SidebarProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [isSidebarCategoryVisible, setIsSidebarCategoryVisible] = useState(true)
    const [activeCategory, setActiveCategory] = useState('Dashboard')
    const [activeSubCategory, setActiveSubCategory] = useState('second')

    // const toggleSidebarCategory = (value?:boolean) => {
    //     setIsSidebarCategoryVisible(prev => !prev)
    // }

    const toggleSidebarCategory = (value?: boolean) => {
        if (typeof value === "boolean") {
            setIsSidebarCategoryVisible(value)
            return
        }

        setIsSidebarCategoryVisible(prev => !prev)
    }

    const updateCategory = (value: string) => {
        setActiveCategory(value)
    }

    const updateActiveSubCategory = (value: string) => {
        setActiveSubCategory(value)
    }


    return (
        <SidebarContext.Provider value={{ isSidebarCategoryVisible, toggleSidebarCategory, activeCategory, updateCategory, activeSubCategory, updateActiveSubCategory }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider