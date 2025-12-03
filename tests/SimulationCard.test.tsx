import { useDashboardStore } from "@/store/dashboardStore";

describe("Dashboard Store - Skill Filtering", () => {
  beforeEach(() => {
    useDashboardStore.setState(useDashboardStore.getInitialState());
  });

  it("filters simulations by selected skill", () => {
    useDashboardStore.getState().setInitialData(
      { id: "u1", name: "Test User" } as any,
      [],
      [
        { id: "1", skills: ["Data Analysis"] } as any,
        { id: "2", skills: ["Communication"] } as any,
        { id: "3", skills: ["Data Analysis", "Communication"] } as any
      ]
    );

    useDashboardStore.getState().setSelectedSkill("Data Analysis");

    const results = useDashboardStore.getState().filteredSimulations;
    expect(results.length).toBe(2);
    expect(results.map((x) => x.id)).toEqual(["1", "3"]);
  });

  it("clears filtering when selecting null", () => {
    useDashboardStore.getState().setSelectedSkill(null);

    const all = useDashboardStore.getState().filteredSimulations;
    expect(all.length).toBe(0);
  });
});
