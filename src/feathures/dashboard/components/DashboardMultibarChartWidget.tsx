import DashboardWidgetContainer from '@/container/DashboardWidgetContainer'
import React, { useState } from 'react'
import MultibarChart from './MultibarChart'
import Select from '@/components/ui/Select'


const DashboardMultibarChartWidget = () => {
      const [time, setTime] = useState<'This Year' | 'Last Year' | 'Till Now'>('This Year')
  
  return (
    <div>
      <DashboardWidgetContainer
      title='Audience Overview'
       select={<Select
                onChange={(value) => setTime(value as 'This Year' | 'Last Year' | 'Till Now')}
                options={[
                    { label: "This Year", value: "This Year" },
                    { label: "Last Year", value: "Last Year" },
                    { label: "Till Now", value: "Til Now" },
                ]}
                value={time}
            />}>
        <div className='sm:px-8 px-1'>
          <MultibarChart />
        </div>
      </DashboardWidgetContainer>
    </div>
  )
}

export default DashboardMultibarChartWidget