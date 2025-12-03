import { ArrowUp, ArrowDown } from "lucide-react";
import { ReactNode } from "react";

export default function KpiCard({
 icon,
  value,
  label,
  percent,
}: {
  icon: ReactNode;
  value: string | number;
  label: string;
  percent?: {
    value: number;
    up: boolean;
  };
}) {
  return (
    <div className="p-5 rounded-2xl border border-primary shadow-sm flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 shadow-sm">
          {icon}
        </div>
        {percent && (
          <span
            className={`text-xs px-2 py-0.5 rounded-lg font-medium flex items-center gap-1
            ${percent.up ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"}`}
          >
            {percent.up ? <ArrowUp size={14} /> : <ArrowDown size={14} />} {percent.value}%
          </span>
        )}
      </div>

      {/* Value */}
      <p className="text-3xl  font-semibold text-primary">{value}</p>

      {/* Label */}
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}