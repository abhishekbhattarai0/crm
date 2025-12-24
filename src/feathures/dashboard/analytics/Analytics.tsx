import Breadcrumbs from '@/components/ui/BreadCrums';
import InfoCard from '../components/InfoCard'
import { analayticsCardInfo } from '@/utils/constants';

import DashboardMultilineChartWidget from '../components/DashboardMultilineChartWidget';
import DashboardMultibarChartWidget from '../components/DashboardMultibarChartWidget';
import ProcressPie from '@/components/ui/CircularProgress';
import DashboardProgressWidget from '../components/DashboardProgressWidget';
import { PieChart } from 'recharts';



const Analytics = () => {
  return (
    <div className="mt-2 px-2 space-y-4">
      
      {/* Header */}
      <div className="flex justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-gray-800">Analytics</h1>
        <Breadcrumbs />
      </div>

      {/* Analytics Cards */}
      <div className="flex gap-4">
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          {analayticsCardInfo.map((item, idx) => (
            <InfoCard {...item} key={idx} />
          ))}
        </div>

        <div className="flex-1">
          <DashboardProgressWidget />
        </div>
      </div>

      {/* Leads & Vendor */}
      <DashboardMultilineChartWidget />

      {/* Audience Overview */}
      <div className="bg-amber-400 p-2">
        <DashboardMultibarChartWidget />
      </div>

      {/* Progress */}
      <DashboardProgressWidget />
    </div>
  );
};

export default Analytics;
