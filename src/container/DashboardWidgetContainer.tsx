import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import { Phone } from 'lucide-react';
import React, { useState } from 'react'

const DashboardWidgetContainer = ({
    title = "Leads & Vendors",
    period = "This Month",
    successRate = "76%",
    description = "Deals successfully closed something is better than nothing",
    actionText = "More details",
    children, // chart goes here
}: {
    title?: string;
    period?: string;
    successRate?: string;
    description?: string;
    actionText?: string;
    children?: React.ReactNode
}) => {

    const [time, setTime] = useState<'This Year' | 'Last Year' | 'Till Now'>('This Year')
    return (
        <div className="rounded border border-gray-300 bg-white  shadow-sm w-full">
            {/* Header */}
            <div className=" flex items-center justify-between border-b border-gray-300 py-3 px-4 ">
                <h3 className=" font-medium text-gray-600">
                    {title}
                </h3>

                {/* <button className="rounded-md border border-gray-200 px-3 py-1 text-xs text-gray-600 hover:bg-gray-50">
                    {period}
                </button> */}
                <div>
                    <Select
                    onChange={(value) => setTime(value as 'This Year' | 'Last Year' | 'Till Now')}
                    options={[
                        { label: "This Year", value: "This Year" },
                        { label: "Last Year", value: "Last Year" },
                        { label: "Till Now", value: "Til Now" },
                    ]}
                    value={time}
                />
            </div>
                </div>

            {/* Summary */}
            <div className="mb-6 flex p-3 justify-between  sm:flex-row flex-col gap-4   ">
                <div className="flex  gap-3  ">
                    <div className="flex size-14 items-center justify-center rounded-full bg-blue-50 text-gray-600 ">
                        <Phone size={36} />
                    </div>

                    <div>
                        <div className="text-lg font-semibold text-gray-500 ">
                            {successRate} Deals Successful
                            <span className="ml-1 text-green-500 ">✔</span>

                        </div>
                        <p className="text-sm text-gray-400 flex">
                            {description}
                        </p>
                    </div>
                </div>
                <div className=' flex sm:justify-end mt-4 sm:mt-0 h-8'>
                    <Button className="bg-white text-gray-400 border border-gray-300 py-1 px-2 rounded text-xs hover:text-white hover:bg-sky-600 transition-all duration-300 active:bg-sky-700 truncate ">
                        {actionText}
                    </Button>
                </div>

            </div>

            {/* Chart Area */}
            <div className='h-full w-full'>
                {children}
            </div>
        </div>
    );
};


export default DashboardWidgetContainer


