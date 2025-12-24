
import DashboardWidgetContainer from '@/container/DashboardWidgetContainer';
import MultiLineChart from './MultilineChart';
import { useState } from 'react';
import Select from '@/components/ui/Select';



const DashboardMultilineChartWidget = () => {
    const [time, setTime] = useState<'This Year' | 'Last Year' | 'Till Now'>('This Year')


    return (
        <DashboardWidgetContainer
            title="Leads & Vendors"
            successRate="76%"
            description="Deals successfully closed something is better than nothing"
            actionText="More details"
            summary
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
                <MultiLineChart />
            </div>
        </DashboardWidgetContainer>
    );
};


export default DashboardMultilineChartWidget


