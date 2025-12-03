import { mockUser } from "@/data/mockUser";
import { mockSkills } from "@/data/mockSkills";
import { mockSimulations } from "@/data/mockSimulations";
import DashboardShell from "./DashboardShell";
export default async function DashboardPage() {
  // Đây là SSR logic — nhận mock data
  const user = mockUser;
  const skills = mockSkills;
  const simulations = mockSimulations;

  return (
    <DashboardShell
      user={user}
      skills={skills}
      simulations={simulations}
    />
  );
}
