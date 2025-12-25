import Breadcrumbs from "@/components/ui/BreadCrums";
import InfoCard from "../components/InfoCard";
import { analayticsCardInfo } from "@/utils/constants";

import DashboardMultilineChartWidget from "../components/DashboardMultilineChartWidget";
import DashboardMultibarChartWidget from "../components/DashboardMultibarChartWidget";
import ProcressPie from "@/components/ui/CircularProgress";
import DashboardProgressWidget from "../components/DashboardProgressWidget";
import { PieChart } from "recharts";
import Card from "../components/Card";
import DashboardActivityWidget from "../components/DashboardActivityWidget";

const cardData = [
  {
    value: "60K",
    label: "Happy Customers",
  },
  {
    value: "120+",
    label: "Projects Completed",
  },
  {
    value: "15",
    label: "Years of Experience",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

const activityCardData = [
  {
    user: "Donald",
    action: "updated the status of",
    target: "Refund #1234",
    status: "awaiting customer response",
    time: "10 min ago",
    iconBg: "bg-blue-200",
  },
  {
    user: "Sarah",
    action: "closed",
    target: "Ticket #5678",
    status: "successfully",
    time: "25 min ago",
    iconBg: "bg-green-200",
  },
  {
    user: "Michael",
    action: "assigned",
    target: "Order #9821",
    status: "to support team",
    time: "1 hour ago",
    iconBg: "bg-purple-200",
  },
  {
    user: "Emma",
    action: "commented on",
    target: "Issue #4321",
    status: "requesting more details",
    time: "2 hours ago",
    iconBg: "bg-yellow-200",
  },
  {
    user: "Alex",
    action: "reopened",
    target: "Case #7789",
    status: "due to customer reply",
    time: "Yesterday",
    iconBg: "bg-red-200",
  },
];

const Analytics = () => {
  return (
    <div className="mt-2 px-2">
      {/* Header */}
      <div className="flex justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-gray-800">Analytics</h1>
        <Breadcrumbs />
      </div>

      {/* Bento Grid */}
      <div className="grid w-full grid-cols-12 gap-2">
        {/* Info Cards */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {analayticsCardInfo.map((item, idx) => (
              <InfoCard {...item} key={idx} />
            ))}
          </div>
        </div>

        {/* Progress Widget */}
        <div className="col-span-12 lg:col-span-4 lg:row-span-2">
          <DashboardProgressWidget />
          <DashboardActivityWidget activityData={activityCardData} />
        </div>

        {/* Multiline Chart */}
        <div className="col-span-12 rounded-xl bg-white p-3 shadow-sm lg:col-span-8">
          <DashboardMultilineChartWidget />
          <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-5">
            {cardData.map((item) => (
              <Card {...item} key={item.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// const Analytics = () => {
//   return (
//     <div className="mt-2 px-2 space-y-4">

//       {/* Header */}
//       <div className="flex justify-between px-4 py-3">
//         <h1 className="text-xl font-bold text-gray-800">Analytics</h1>
//         <Breadcrumbs />
//       </div>

//       {/* Analytics Cards */}
//       <div className="flex gap-4">
//         <div className="w-3/4 grid grid-cols-1 sm:grid-cols-4 gap-4">
//           {analayticsCardInfo.map((item, idx) => (
//             <InfoCard {...item} key={idx} />
//           ))}
//         </div>

//         <div className="flex-1">
//           <DashboardProgressWidget />
//         </div>
//       </div>

//       {/* Leads & Vendor */}
//       <DashboardMultilineChartWidget />

//       {/* Audience Overview */}
//       <div className="bg-amber-400 p-2">
//         <DashboardMultibarChartWidget />
//       </div>

//       {/* Progress */}
//       <DashboardProgressWidget />
//     </div>
//   );
// };
export default Analytics;
