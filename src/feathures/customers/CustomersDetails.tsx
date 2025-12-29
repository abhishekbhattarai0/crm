import React from 'react'
import ContactTable from './components/table-page'
import DashboardWidgetContainer from '@/container/DashboardWidgetContainer'
import Breadcrumbs from '@/components/ui/BreadCrums'

const CustomersDetails = () => {
  return (
    <>
      <div className="flex justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-gray-800">Contacts</h1>
        <Breadcrumbs />

      </div>

      <div className='m-4'>
        <DashboardWidgetContainer title='Contact Details'>

          <ContactTable />
        </DashboardWidgetContainer>
      </div>
    </>

  )
}

export default CustomersDetails
