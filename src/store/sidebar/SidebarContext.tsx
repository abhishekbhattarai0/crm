// context provider
import { createContext } from 'react'

interface SidebarContextProps {
    toggleSidebarCategory: (value?: boolean) => void;
    isSidebarCategoryVisible: boolean;
    activeCategory: string;
    updateCategory: (value: string) => void;
    activeSubCategory: string;
    updateActiveSubCategory: (value: string) => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

