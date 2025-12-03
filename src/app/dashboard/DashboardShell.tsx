"use client";

import { useEffect } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import HeaderSnapshot from "@/modules/header/HeaderSnapshot";
import SkillChart from "@/modules/skills/SkillChart";
import SimulationList from "@/modules/simulations/SimulationList";
import RecommendationList from "@/modules/recommendations/RecommendationList";
import { User, SkillScore, Simulation } from "@/types";

type DashboardShellProps = {
  user: User;
  skills: SkillScore[];
  simulations: Simulation[];
};

export default function DashboardShell({ user, skills, simulations }: DashboardShellProps) {
  const setInitialData = useDashboardStore((s) => s.setInitialData);

  useEffect(() => {
    setInitialData(user, skills, simulations);
  }, []);

  return (
    <div className="p-6 bg-gray-100 text-black space-y-8">
      <HeaderSnapshot />
      <SimulationList />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-0">

        <div className="md:col-span-2 min-w-0 w-full flex">
          <div className="w-full min-w-0">
            <SkillChart />
          </div>
        </div>

        <RecommendationList />
      </div>
    </div>
  );
}
