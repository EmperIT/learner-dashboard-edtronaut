import { User } from "@/types";

export const mockUser: User = {
  id: "u1",
  name: "An Nguyen",
  avatarUrl: "https://i.pravatar.cc/150?img=3",

  totalSimulationsStarted: 5,
  totalSimulationsCompleted: 3,
  averageScore: 78,

  streakDays: 4,
  learningDaysThisWeek: 3,

  careerActions: 12,
  dashboardVisits: 20,

  startedThisWeek: 2,
  completedThisWeek: 1,
  scoreTrend: +4,
  activationTrend: +2,

  skillsProfile: [
    { name: "Communication", score: 72 },
    { name: "Problem Solving", score: 65 },
    { name: "Data Analysis", score: 55 },
    { name: "Stakeholder Management", score: 40 },
    { name: "Domain Knowledge", score: 80 },
  ],

  lastUpdatedAt: "2025-02-02T10:00:00Z",
};
