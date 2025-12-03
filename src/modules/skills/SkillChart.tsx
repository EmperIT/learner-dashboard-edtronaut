"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SkillChart() {
  const skills = useDashboardStore((s) => s.skills);           // SkillScore[]
  const selectedSkill = useDashboardStore((s) => s.selectedSkill);
  const setSelectedSkill = useDashboardStore((s) => s.setSelectedSkill);

  const handleClick = (skillName?: string) => {
    if (!skillName) return;

    if (selectedSkill === skillName) {
      setSelectedSkill(null);       // click lại → bỏ chọn
    } else {
      setSelectedSkill(skillName);  // chọn skill mới
    }
  };


  const chartData = skills.map((s) => ({
    name: s.name,
    score: s.score,
  }));

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl text-primary">Skills</h2>

        {selectedSkill && (
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-sm text-blue-600 hover:underline"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="h-64 w-full min-h-[300px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 100]} />
            <Tooltip />

            <Bar
              dataKey="score"
              radius={[6, 6, 0, 0]}
              onClick={(_, index) => handleClick(chartData[index].name)}
              cursor="pointer"
              fill="#8884d8"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Click a skill to filter simulations related to that skill.
      </p>
    </div>
  );
}
