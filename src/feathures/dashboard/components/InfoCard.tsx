import { IoTrendingDownOutline, IoTrendingUpOutline } from "react-icons/io5";

import React from 'react'


type InfoCardProps = {
    title: string;
    total: string;
    rate: number;
    desc: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const InfoCard = ({ title, total, rate, Icon, desc, }: InfoCardProps) => {
    return (
        <div className='border shadow-sm border-gray-100 px-4 rounded py-4 flex flex-col gap-2'>
            <div className='font-medium text-gray-900' >
                {title}
            </div>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold text-gray-700 '>
                    {total}
                </h1>
                <div className='p-3 bg-gray-200/80 rounded-full text-xl '>
                    <Icon className='text-gray-500' />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-px text-2xs font-medium text-green-500'>
                    {rate > 0 ? (
                        <>
                            <IoTrendingUpOutline />
                            <p>8.5%</p>
                        </>
                    ) : (
                        <>
                            <IoTrendingDownOutline color='red' />
                            <p className='text-red-500 '>{rate}</p>
                        </>
                    )}
                    <p className='text-gray-500 pl-1 truncate'>{desc}</p>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default InfoCard