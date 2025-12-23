import InfoCard from '../components/InfoCard'
import { analayticsCardInfo } from '@/utils/constants';



const Analytics = () => {
    return (
        <div className='mt-2'>
            <div className='flex justify-between px-4 py-3 '>
                <h1 className='text-xl font-bold text-gray-800'>Analytics</h1>
                <div className='font-doto font-bold'> BreadCrum navigation</div>
            </div>

            {/* analytics card */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2  gap-4 px-2'>
                {analayticsCardInfo.map((item, idx) => (
                    <InfoCard {...item} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default Analytics