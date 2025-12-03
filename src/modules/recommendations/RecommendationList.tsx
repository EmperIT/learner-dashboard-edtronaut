"use client";

import RecommendationCard from "@/components/RecommendationCard";
import { useDashboardStore } from "@/store/dashboardStore";
import { Simulation } from "@/types";

export default function RecommendationList() {
  const simulations = useDashboardStore((s) => s.simulations);
  const skills = useDashboardStore((s) => s.skills);
  const selectedSkill = useDashboardStore((s) => s.selectedSkill);

  if (!simulations || !skills || skills.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="font-semibold text-2xl text-primary mb-4">Recommendations for You</h2>
        <p className="text-gray-500 text-sm">Loading recommendations...</p>
      </div>
    );
  }

  const availableSims = simulations.filter((sim) => sim.status !== "COMPLETED");

  let recommended: Simulation[] = [];

  let weakestSkill: string | null = null;

  if (selectedSkill) {
    recommended = availableSims
      .filter((sim) => sim.skills.includes(selectedSkill))
      .sort(
        (a, b) =>
          b.skills.filter((x) => x === selectedSkill).length -
          a.skills.filter((x) => x === selectedSkill).length
      );
  } else {
    weakestSkill = [...skills].sort((a, b) => a.score - b.score)[0].name;

    recommended = availableSims.filter((sim) =>
      sim.skills.includes(weakestSkill!)
    );
  }

  recommended = recommended.slice(0, 3);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
      <h2 className="font-semibold text-2xl text-primary mb-3">Recommendations for You</h2>

      {selectedSkill ? (
        <p className="text-sm text-blue-600 mb-4">
          Based on your interest in: <strong>{selectedSkill}</strong>
        </p>
      ) : weakestSkill ? (
        <p className="text-sm text-gray-600 mb-4">
          Based on your weakest skill: <strong>{weakestSkill}</strong>
        </p>
      ) : null}

      {recommended.length === 0 ? (
        <p className="text-gray-500 text-sm">No recommendations available.</p>
      ) : (
        <div className="space-y-4">
          {recommended.map((sim) => (
            <RecommendationCard
              key={sim.id}
              sim={sim}
              selectedSkill={selectedSkill}
            />
          ))}
        </div>
      )}
    </div>
  );
}

