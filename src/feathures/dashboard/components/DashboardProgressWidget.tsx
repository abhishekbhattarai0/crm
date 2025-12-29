import React from 'react'
import CustomActiveShapePieChart from './PieChart'
import DashboardWidgetContainer from '@/container/DashboardWidgetContainer'
import ChartContainer from '@/container/ChartContainer'
import Button from '@/components/ui/Button'
import { Calendar } from 'lucide-react'

const DashboardProgressWidget = () => {
  return (
    <div className='w-full'>
      <DashboardWidgetContainer
        title='Monthly Trends'

      >
        {/* <ProcressPie percentage={50} colour='#3941db' /> */}
        <ChartContainer>
          <CustomActiveShapePieChart />
          <div className='pl-3 py-5'>
            <Button className="bg-white text-gray-500 border border-gray-400 py-1 px-4 rounded text-xs hover:text-white hover:bg-sky-600 transition-all duration-300 active:bg-sky-700 truncate ">
              More
            </Button>
            <div className='text-xs text-gray-500 p-2 flex items-center justify-center pt-3 gap-1 '>
              <Calendar />
              <p>
                01 January 2021 to 31 December 2021
              </p>
            </div>
          </div>
        </ChartContainer>
      </DashboardWidgetContainer>
    </div>
  )
}

export default DashboardProgressWidget
