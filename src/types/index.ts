export type SkillScore = {
    name: string;
    score: number; // 0–100
};

export type SimulationStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export type Simulation = {
    id: string;
    title: string;
    companyName: string;
    companyLogoUrl: string;
    role: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    lastActivityAt?: string;
    progressPercent: number;
    status: SimulationStatus;
    estimatedMinutes: number;
    skills: string[];
};

export type User = {
    id: string;
    name: string;
    avatarUrl: string;

    // KPI: Section 1
    totalSimulationsStarted: number;
    totalSimulationsCompleted: number;
    averageScore: number;      // 0–100

    // Weekly engagement
    streakDays: number;
    learningDaysThisWeek?: number; // optional nhưng nên có

    // Career Activation
    careerActions: number;
    dashboardVisits: number;

    // Trend data (for arrows in UI)
    startedThisWeek?: number;
    completedThisWeek?: number;
    scoreTrend?: number;           // + or - %
    activationTrend?: number;      // + or - %

    // Section 3: Skills radar
    skillsProfile?: SkillScore[];

    // System metadata
    lastUpdatedAt?: string;
};
