import DashboardWidgetContainer from '@/container/DashboardWidgetContainer'
import React from 'react'
import ContactTable from './components/ContactTable'

const Contact = () => {
    return (
        <div className='p-4'>
            <DashboardWidgetContainer title='Contacts'>
            <ContactTable/>
        </DashboardWidgetContainer>
        </div>
    )
}

export default Contact