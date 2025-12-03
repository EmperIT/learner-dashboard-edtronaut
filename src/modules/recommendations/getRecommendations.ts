import { Simulation, SkillScore } from "@/types";

export function getRecommendations(
  sims: Simulation[],
  skills: SkillScore[],
  selectedSkill?: string | null
) {
  if (selectedSkill) {
    return sims.filter((s) => s.skills.includes(selectedSkill)).slice(0, 3);
  }

  if (skills.length === 0) return [];

  const weakest = [...skills].sort((a, b) => a.score - b.score)[0].name;
  return sims.filter((s) => s.skills.includes(weakest)).slice(0, 3);
}
