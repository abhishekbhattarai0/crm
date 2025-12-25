import IconComponent from "@/components/ui/IconComponent";
import DashboardWidgetContainer from "@/container/DashboardWidgetContainer";
import { cn } from "@/utils/cn";
import { User2 } from "lucide-react";

interface ActivityDataProps {
  user: string;
  action: string;
  target: string;
  status: string;
  time: string;
  iconBg: string;
  className?: string;
}

const DashboardActivityWidget = ({
  activityData,
}: {
  activityData: ActivityDataProps[];
}) => {
  return (
    <DashboardWidgetContainer title="Activity">
      <div className="flex flex-col gap-2 px-1 py-2">
        {activityData?.map((item) => (
          <ActivityCard {...item} key={item.user} />
        ))}
      </div>
    </DashboardWidgetContainer>
  );
};

export default DashboardActivityWidget;

const ActivityCard = ({
  user,
  action,
  target,
  status,
  time,
  iconBg,
  className,
}: ActivityDataProps) => {
  return (
    <div
      className={cn(
        "flex w-full justify-between gap-3 p-1 text-xs text-gray-400",
        className,
      )}
    >
      <div>
        <IconComponent
          Icon={User2}
          className={cn("rounded-full bg-blue-200 p-2", iconBg)}
        />
      </div>
      <div className="flex-1">
        <span className="text-gray-700">{user}</span> {action}{" "}
        <span className="text-gray-700">{target}</span> {status}
      </div>
      <p className="w-18">{time}</p>
    </div>
  );
};
