import { useSidebarContext } from '@/hooks/useSidebarContext'
import { GiBulb, GiHamburgerMenu } from 'react-icons/gi'
import Input from '@/components/ui/Input'
import IconComponent from '../ui/IconComponent'
import { Sun } from 'lucide-react'

const Header = () => {
    const { toggleSidebarCategory } = useSidebarContext()
    return (
        <div className='w-full flex h-14  justify-between items-center border-b  border-gray-200 shadow-xs'>
            <div className='ml-2'>
                {/* <div className='p-2.5 text-lg  rounded-full bg-gray-200 text-black' onClick={() => toggleSidebarCategory()}>
                <GiHamburgerMenu fontWeight={2}/> 
            </div> */}
                <IconComponent className='ml-1 h-9 w-9 bg-gray-300/50 rounded-full' Icon={GiHamburgerMenu} onClick={() => toggleSidebarCategory()} />
            </div>
            <div className='flex-1 px-10'>
                <Input className='sm:w-3/4 w-full' placeholder="Search anything" />
            </div>
            <div className='flex gap-3 mr-4 '>
                <IconComponent className='ml-1 h-9 w-9 p-2 text-yellow-400 bg-gray-300/50 rounded-full' Icon={Sun} onClick={() => toggleSidebarCategory()} />
            </div>
        </div>
    )
}

export default Header