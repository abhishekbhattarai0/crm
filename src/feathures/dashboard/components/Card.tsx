import { cn } from "@/utils/cn";
import React from "react";

const Card = ({
  className,
  value,
  label,
}: {
  className?: string;
  value: string;
  label: string;
}) => {
  return (
    <div
      className={cn(
        "py-4 flex w-full flex-col items-center justify-center gap-2 rounded border border-gray-300 p-2 ",
        className,
      )}
    >
      <div className="text-xl font-semibold text-gray-700">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default Card;
