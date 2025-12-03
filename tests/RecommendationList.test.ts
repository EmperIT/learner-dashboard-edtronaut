import { getRecommendations } from "@/modules/recommendations/getRecommendations";

describe("Recommendation Logic", () => {
  const sims = [
    { id: "1", skills: ["SQL"] } as any,
    { id: "2", skills: ["Communication"] } as any,
    { id: "3", skills: ["SQL", "Communication"] } as any
  ];

  const skills = [
    { name: "SQL", score: 40 },
    { name: "Communication", score: 70 }
  ];

  it("returns simulations by selected skill", () => {
    const r = getRecommendations(sims, skills, "SQL");
    expect(r.map((o) => o.id)).toEqual(["1", "3"]);
  });

  it("returns weakest skill simulations when no filter selected", () => {
    const r = getRecommendations(sims, skills);
    expect(r.map((o) => o.id)).toEqual(["1", "3"]);
  });
});
