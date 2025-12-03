"use client";

import { useState } from "react";
import Image from "next/image";
import { Simulation } from "@/types";
import { Progress } from "@/components/ui/Progress";

export default function SimulationCard({ sim }: { sim: Simulation }) {
  const [expanded, setExpanded] = useState(false);

  const difficultyStyle =
    sim.difficulty === "Beginner"
      ? "bg-blue-100 text-blue-600"
      : sim.difficulty === "Intermediate"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-red-100 text-red-600";

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`p-4 rounded-xl border bg-white transition-all cursor-pointer 
        hover:shadow-md overflow-hidden
        ${expanded ? "shadow-lg border-primary" : "border-gray-200"}
      `}
    >
      <div className="flex gap-4 items-start">
        <Image
          src={sim.companyLogoUrl}
          alt={sim.companyName}
          width={48}
          height={48}
          className="rounded-lg border"
        />

        <div className="flex flex-col w-full">
          <h3 className="font-semibold text-textPrimary">{sim.title}</h3>
          <p className="text-xs text-textSecondary">{sim.role}</p>

          <span
            className={`mt-2 px-2 py-0.5 text-xs rounded-full w-fit font-medium ${difficultyStyle}`}
          >
            {sim.difficulty}
          </span>

          <div className="mt-3">
            <Progress value={sim.progressPercent} />
            <p className="text-xs text-gray-500 mt-1">
              {sim.progressPercent}% completed
            </p>
          </div>

          {sim.lastActivityAt && (
            <p className="text-[11px] text-gray-400 mt-2">
              Last activity:{" "}
              {new Date(sim.lastActivityAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
          )}
        </div>
      </div>

      {/* EXPANDED DETAIL SECTION */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden
          ${expanded ? "max-h-60 mt-4" : "max-h-0"}
        `}
      >
        <div className="border-t pt-3 text-sm text-gray-700">
          <p className="font-semibold text-gray-900 mb-2">
            Simulation Details
          </p>

          <DetailRow label="Company" value={sim.companyName} />
          <DetailRow label="Role" value={sim.role} />
          <DetailRow label="Difficulty" value={sim.difficulty} />
          <DetailRow label="Skills" value={sim.skills?.join(", ")} />
          <DetailRow
            label="Estimated time"
            value={`${sim.estimatedMinutes} mins`}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
            className="mt-3 text-blue-600 text-xs hover:underline"
          >
            Close details
          </button>
        </div>
      </div>
    </div>
  );
}

/* Small helper row */
function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-xs mb-1">
      <span className="font-medium text-gray-900">{label}:</span> {value}
    </p>
  );
}
