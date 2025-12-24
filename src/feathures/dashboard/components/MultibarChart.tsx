


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, type TooltipContentProps } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';



const data2 = [
    {
        "month": "Jan",
        "newVisitors": 65,
        "uniqueVisitors": 50
    },
    {
        "month": "Feb",
        "newVisitors": 45,
        "uniqueVisitors": 75
    },
    {
        "month": "Mar",
        "newVisitors": 55,
        "uniqueVisitors": 85
    },
    {
        "month": "Apr",
        "newVisitors": 58,
        "uniqueVisitors": 100
    },
    {
        "month": "May",
        "newVisitors": 57,
        "uniqueVisitors": 95
    },
    {
        "month": "Jun",
        "newVisitors": 60,
        "uniqueVisitors": 88
    },
    {
        "month": "Jul",
        "newVisitors": 59,
        "uniqueVisitors": 105
    },
    {
        "month": "Aug",
        "newVisitors": 63,
        "uniqueVisitors": 90
    },
    {
        "month": "Sep",
        "newVisitors": 60,
        "uniqueVisitors": 110
    },
    {
        "month": "Oct",
        "newVisitors": 65,
        "uniqueVisitors": 92
    }
]





const MultibarChart = () => {
    return (
        <BarChart
            style={{ width: '100%', aspectRatio: 1.618 }}
            responsive
            data={data2}
            barSize={10}
        //   margin={{
        //     top: 25,
        //     right: 0,
        //     left: 0,
        //     bottom: 5,
        //   }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="month"

            // tickFormatter={monthTickFormatter}
            />
            <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                interval={0}
                height={1}
                scale="band"
                xAxisId="quarter"
            />
            <YAxis width="auto" />
            <Tooltip content={CustomTooltip} />
            <Legend wrapperStyle={{ paddingTop: '1em', }} />
            <Bar dataKey="newVisitors" fill="#8884d8" />
            <Bar dataKey="uniqueVisitors" fill="#82ca9d" />
        </BarChart>
    );
};

export default MultibarChart;


const CustomTooltip = ({ active, payload, label }: TooltipContentProps<string | number, string>) => {
    const isVisible = active && payload && payload.length;

    return (
        <div className='bg-gray-100 rounded p-2'>
            {isVisible && (
                <div>
                    <p className='text-sm text-sky-900'>{label}</p>
                    <p className="text-gray-800">{`New Visitors : ${payload[0].value}`}</p>
                    <p className="text-gray-800">{`Unique Visitors  : ${payload[1].value}`}</p>
                    {/* <p className="intro">{getIntroOfPage(label)}</p> */}
                </div>
            )}
        </div>
    )
}