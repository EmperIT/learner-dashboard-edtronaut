"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import KpiCard from "@/components/KpiCard";
import CareerActivationCard from "@/components/CareerActivationCard";
import AvatarBadge from "@/components/AvatarBadge";
import SectionSkeleton from "@/components/SectionSkeleton";
import {
  FaPlayCircle,
  FaCheckCircle,
  FaStarHalfAlt,
  FaFire,
} from "react-icons/fa";

export default function HeaderSnapshot() {
  const user = useDashboardStore((s) => s.user);

  if (!user) return <SectionSkeleton />;

  const {
    learningDaysThisWeek,
    careerActions,
    dashboardVisits,
    activationTrend,
    lastUpdatedAt,
  } = user;

  const careerActivationRate = dashboardVisits
    ? Math.min((careerActions / dashboardVisits) * 100, 100)
    : 0;

  return (
    <section
      className="p-6 bg-white rounded-2xl shadow-soft border border-gray-100"
      aria-label="Learner progress summary"
    >
      {/* TOP: Avatar + Greeting */}
      <div className="flex items-center gap-4">
        <AvatarBadge name={user.name} src={user.avatarUrl} />

        <div>
          <h1 className="text-2xl font-semibold text-textPrimary">
            Hi {user.name}!
          </h1>
          <p className="text-textSecondary text-sm">
            You're actively building your skills — keep up the great momentum!
          </p>

          {learningDaysThisWeek !== undefined && (
            <p className="text-xs text-textSecondary mt-1">
              Active for{" "}
              <span className="font-medium">{learningDaysThisWeek} days</span>{" "}
              this week.
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 border-t border-gray-100" />

      {/* MAIN CONTENT */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        {/* KPI GRID */}
        <div
          className="flex-1 min-w-0 grid grid-cols-2 md:grid-cols-4 gap-4"
          aria-label="Key learning performance indicators"
        >
          {/* STARTED */}
          <KpiCard
            icon={<FaPlayCircle className="text-primary text-lg" />}
            value={user.totalSimulationsStarted}
            label="Simulations Started"
            percent={{ value: 25.5, up: true }}
          />

          <KpiCard
            icon={<FaCheckCircle className="text-success text-lg" />}
            value={user.totalSimulationsCompleted}
            label="Completed"
            percent={{ value: 12.5, up: false }}
          />

          <KpiCard
            icon={<FaStarHalfAlt className="text-yellow-500 text-lg" />}
            value={user.averageScore + "%"}
            label="Average Score"
            percent={{ value: 15.3, up: false }}
          />

          <KpiCard
            icon={<FaFire className="text-red-500 text-lg" />}
            value={user.streakDays + " days"}
            label="Current Streak"
            percent={{ value: 25.5, up: true }}
          />
        </div>

        {/* CAREER ACTIVATION RATE CARD */}
        <div className="lg:w-[500px] w-full">
          <CareerActivationCard
            percent={careerActivationRate}
            trend={activationTrend}
          />
        </div>
      </div>

      {/* Last updated */}
      {lastUpdatedAt && (
        <p className="mt-4 text-xs text-gray-400">
          Last updated:{" "}
          {new Date(lastUpdatedAt).toLocaleString(undefined, {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>
      )}
    </section>
  );
}