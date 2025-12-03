import Image from "next/image";
import { Simulation } from "@/types";
export default function RecommendationCard({
  sim,
  selectedSkill,
}: {
  sim: Simulation;
  selectedSkill?: string | null;
}) {
  const reason = selectedSkill
    ? `Improves your ${selectedSkill} skill.`
    : `Helps develop ${sim.skills.join(", ")} skill${
        sim.skills.length > 1 ? "s" : ""
      }.`;

  return (
    <div className="border border-gray-300 rounded-xl p-4 hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer bg-white">
      <div className="flex justify-between items-start">
        {/* Left info */}
        <div className="flex items-center gap-3">
          <Image
            src={sim.companyLogoUrl}
            width={40}
            height={40}
            alt={sim.companyName}
            className="rounded-md border"
          />
          <div>
            <h3 className="font-medium text-base leading-tight">{sim.title}</h3>
            <p className="text-sm text-gray-500">{sim.companyName}</p>
          </div>
        </div>

        {/* Difficulty Badge */}
        <span className="text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-600">
          {sim.difficulty}
        </span>
      </div>

      {/* Estimated Time */}
      <p className="text-sm text-gray-700 mt-2">
        Estimated time: {sim.estimatedMinutes} mins
      </p>

      {/* Reason */}
      <p className="text-xs text-gray-500 mt-2 italic">{reason}</p>
    </div>
  );
}
