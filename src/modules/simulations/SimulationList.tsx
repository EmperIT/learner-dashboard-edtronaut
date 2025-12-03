"use client";

import { useEffect, useState } from "react";
import SimulationCard from "./SimulationCard";
import { Simulation } from "@/types";
import { useDashboardStore } from "@/store/dashboardStore";

export default function SimulationList() {
  const filteredSimulations = useDashboardStore((s) => s.filteredSimulations);
  const selectedSkill = useDashboardStore((s) => s.selectedSkill);

  const inProgress = filteredSimulations.filter((s) => s.status === "IN_PROGRESS");
  const completed = filteredSimulations.filter((s) => s.status === "COMPLETED");
  const notStarted = filteredSimulations.filter((s) => s.status === "NOT_STARTED");

  return (
    <section className="bg-white p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-primary">Active & Completed Simulations</h2>
      <p className="text-sm text-textSecondary mt-1">
        Section listing what you have been working on.
      </p>

      {selectedSkill && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
          Showing simulations for skill: <strong>{selectedSkill}</strong>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Column title="In Progress" sims={inProgress} />
        <Column title="Completed" sims={completed} />
        <Column title="Not Started" sims={notStarted} />
      </div>
    </section>
  );
}

function Column({ title, sims }: { title: string; sims: Simulation[] }) {
  const statusColorMap: Record<string, string> = {
    "In Progress": "text-blue-600",
    "Completed": "text-green-600",
    "Not Started": "text-gray-600",
  };

  const [page, setPage] = useState(0);
  const pageSize = 3;

  useEffect(() => {
    setPage(0);
  }, [sims]);

  const totalPages = sims.length === 0 ? 1 : Math.ceil(sims.length / pageSize);

  const start = page * pageSize;
  const visibleItems = sims.slice(start, start + pageSize);

  const noData = sims.length === 0;

  return (
    <div className="p-4 border-r-2 border-gray-200">
      <h3 className={`font-medium mb-3 flex items-center justify-between ${statusColorMap[title]}`}>
        {title}

        {!noData && (
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="px-2 py-0.5 border rounded disabled:opacity-40"
              disabled={page === 0}
            >
              Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              className="px-2 py-0.5 border rounded disabled:opacity-40"
              disabled={page === totalPages - 1}
            >
              Next
            </button>
          </div>
        )}
      </h3>

      {noData && <EmptyState message="No simulations available." />}

      <div className="flex flex-col gap-4">
        {visibleItems.map((sim) => (
          <HighlightableCard key={sim.id} sim={sim} />
        ))}
      </div>
    </div>
  );
}


function HighlightableCard({ sim }: { sim: Simulation }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`transition border rounded-xl ${
        active ? "border-blue-500 shadow-md" : "border-gray-200"
      }`}
    >
      <SimulationCard sim={sim} />
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="border rounded-xl py-10 text-center text-gray-500 bg-gray-50 text-sm">
      {message}
    </div>
  );
}
