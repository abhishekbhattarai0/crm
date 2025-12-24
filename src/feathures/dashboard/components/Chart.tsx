import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';

// #region Sample data
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];


const data = [
  { month: "Jan", newVisits: 20, uniqueVisits: 10 },
  { month: "Feb", newVisits: 60, uniqueVisits: 40 },
  { month: "Mar", newVisits: 20, uniqueVisits: 10 },
  { month: "Apr", newVisits: 80, uniqueVisits: 60 },
  { month: "May", newVisits: 70, uniqueVisits: 50 },
  { month: "Jun", newVisits: 110, uniqueVisits: 90 },
  { month: "Jul", newVisits: 60, uniqueVisits: 40 },
  { month: "Aug", newVisits: 130, uniqueVisits: 110 },
  { month: "Sep", newVisits: 50, uniqueVisits: 30 },
  { month: "Oct", newVisits: 100, uniqueVisits: 80 },
  { month: "Nov", newVisits: 70, uniqueVisits: 50 },
  { month: "Dec", newVisits: 120, uniqueVisits: 100 }
];

// #endregion

export default function MultiLineChart() {
  return (
    <AreaChart
      style={{ width: '100%', aspectRatio: 1.618, zIndex:'auto' }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeOpacity='0.6' strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis width="auto" />
      <Tooltip />
      {/* <Legend /> */}
      <Area
        type="monotone"
        dataKey="newVisits"
        stroke="#2563eb"
        fill="#5130e3"
        fillOpacity={0.3}
      />
      <Area
        type="monotone"
        dataKey="uniqueVisits"
        stroke="#2563eb"
        fill="#7cbcfc"
        fillOpacity={1}
      />
      {/* <Line type="monotone" dataKey="newVisits" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uniqueVisits" stroke="#82ca9d" /> */}
    </AreaChart>
  );
}