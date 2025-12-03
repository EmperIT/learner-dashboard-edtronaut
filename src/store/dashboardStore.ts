import { create } from "zustand";
import { Simulation, SkillScore, User } from "@/types";

type DashboardState = {
  user: User | null;
  skills: SkillScore[];
  simulations: Simulation[];
  filteredSimulations: Simulation[];
  selectedSkill: string | null;

  setInitialData: (user: User, skills: SkillScore[], sims: Simulation[]) => void;
  setSelectedSkill: (skill: string | null) => void;
};

export const useDashboardStore = create<DashboardState>((set, get) => ({
  user: null,
  skills: [],
  simulations: [],
  filteredSimulations: [],
  selectedSkill: null,

  setInitialData: (user, skills, sims) =>
    set({
      user,
      skills,
      simulations: sims,
      filteredSimulations: sims,
    }),

  setSelectedSkill: (skill) => {
    const all = get().simulations;

    // toggle
    const newSkill = get().selectedSkill === skill ? null : skill;

    const filtered = newSkill
      ? all.filter((sim) => sim.skills.includes(newSkill))
      : all;

    set({
      selectedSkill: newSkill,
      filteredSimulations: filtered,
    });
  },
}));
