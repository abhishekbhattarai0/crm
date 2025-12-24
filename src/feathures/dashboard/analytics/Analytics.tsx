import Breadcrumbs from '@/components/ui/BreadCrums';
import InfoCard from '../components/InfoCard'
import { analayticsCardInfo } from '@/utils/constants';

import DashboardMultilineChartWidget from '../components/DashboardMultilineChartWidget';
import DashboardMultibarChartWidget from '../components/DashboardMultibarChartWidget';



const Analytics = () => {
    return (
        <div className='mt-2'>
            <div className='flex justify-between px-4 py-3 '>
                <h1 className='text-xl font-bold text-gray-800'>Analytics</h1>
                <div> <Breadcrumbs /></div>

            </div>

            {/* analytics card */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2  gap-4 px-2'>
                {analayticsCardInfo.map((item, idx) => (
                    <InfoCard {...item} key={idx} />
                ))}
            </div>

            {/* leads and vendor card */}
            <div className='sm:flex  '>
                <div className='m-2'>
                    <DashboardMultilineChartWidget />

                </div>

                <div className='m-2 '>
                    <DashboardMultilineChartWidget />

                </div>
            </div>


            <div className='m-2 bg-amber-400'>
                {/* audience overview chart */}
                <DashboardMultibarChartWidget />
            </div>
        </div>
    )
}

export default Analytics