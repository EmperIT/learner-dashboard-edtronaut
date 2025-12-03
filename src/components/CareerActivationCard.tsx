"use client";

import { FaBullseye } from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ArrowUp, ArrowDown } from "lucide-react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

export default function CareerActivationCard({
  percent,
  trend,
}: {
  percent: number;
  trend?: number;
}) {
  const progress = Math.min(Math.max(percent, 0), 100);

  const color =
    progress >= 70 ? "#16a34a" : progress >= 40 ? "#eab308" : "#dc2626";

  return (
    <div className="p-6 justify-between rounded-2xl bg-white border border-primary shadow-soft flex gap-6 w-full">
      <div className="flex flex-col w-full items-center gap-4">
        {/* LEFT: Circular chart */}
          {/* Title + tooltip */}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="flex items-center gap-2 cursor-help text-sm font-medium text-textSecondary">
                  <FaBullseye className="text-primary" />
                  Career Activation Rate
                </button>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="bg-black text-white text-xs px-3 py-2 rounded shadow max-w-xs"
                >
                  Percentage of learners who perform at least one meaningful
                  career action within 30 days of visiting the dashboard.
                  <Tooltip.Arrow className="fill-black" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        <div className="w-32 flex justify-center items-center">
          <CircularProgressbar
            value={progress}
            text={`${progress.toFixed(0)}%`}
            strokeWidth={8}
            className="career-activation-chart"
            styles={buildStyles({
              textColor: "#1f2937",
              pathColor: color,
              trailColor: "#e5e7eb",
              strokeLinecap: "round",
            })}
          />
        </div>

      </div>

      {/* RIGHT: Title + trend + meaning list */}
      <div className="flex flex-col justify-between w-full">

        {/* Trend */}
        {trend !== undefined && (
          <span
            className={`mt-2 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg font-medium w-fit 
              ${trend > 0
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
              }`}
          >
            {trend > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            {Math.abs(trend)}% vs last period
          </span>
        )}

        {/* Meaningful actions list */}
        <div className="mt-3 text-xs leading-relaxed">
          <p className="font-medium mb-1">Actions counted:</p>

          <ul className="space-y-0.5">
            <li>• Completed a simulation</li>
            <li>• Started a recommended simulation</li>
            <li>• Saved or applied to a recommended job</li>
            <li>• Updated CV via CV PowerUp</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
