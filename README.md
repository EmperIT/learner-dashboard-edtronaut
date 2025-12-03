# Learner Dashboard (Edtronaut)
Link demo: https://learner-dashboard-edtronaut.vercel.app/dashboard

A small, component-driven learner dashboard built with Next.js, TypeScript and Tailwind CSS. The app demonstrates a compact dashboard surface showing a user's skills profile, recommended simulations, and progress widgets backed by mock data and a lightweight `zustand` store.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** Zustand
- **Charts / UI:** Recharts, Radix UI, React icons
- **Testing:** Jest and React Testing Library

## Features

- Dashboard shell with user summary and KPI cards
- Skill profile and weakest-skill-based recommendations
- Simulation cards and a recommendation list component
- Client state management using a small `zustand` store
- Mock data under `src/data/` used for local development and tests

## Quick start

PowerShell / Windows commands shown below.

Install dependencies:

```powershell
npm install
```

Run the development server: 

```powershell
npm run dev
```

Open http://localhost:3000/dashboard in your browser (the dashboard lives under `/dashboard`).

Build for production:

```powershell
npm run build
npm run start
```

Run tests:

```powershell
npm test
# or run jest directly
npx jest
```

Lint (ESLint):

```powershell
npm run lint
```

## Scripts (from `package.json`)

- `dev` — start Next.js dev server
- `build` — build for production
- `start` — run production server
- `test` — run Jest tests
- `lint` — run ESLint

## Project structure (important files)

- `src/app/dashboard` — Dashboard entry and `DashboardShell`
- `src/components` — UI components (cards, badges, skeletons)
- `src/modules` — feature modules (recommendations, simulations, skills)
- `src/store/dashboardStore.ts` — `zustand` store used across the dashboard
- `src/data/*.ts` — mock data used for development and tests
- `tests/` — Jest unit tests for logic and components

## Notes for developers

- The app currently uses mock data (`src/data/mockUser.ts`, `mockSkills.ts`, `mockSimulations.ts`) and is wired to server-side rendering in `src/app/dashboard/page.tsx` which passes those mocks into `DashboardShell`.
- Recommendations logic is implemented in `src/modules/recommendations/getRecommendations.ts` and rendered by `RecommendationList.tsx`. Tests for recommendation logic are in `tests/RecommendationList.test.ts`.
- Global state is intentionally minimal (user, skills, simulations, selected skill). Use `useDashboardStore` from `src/store/dashboardStore.ts` to access or update state.

## Testing

- Unit tests use Jest with `ts-jest` and React Testing Library. Run `npm test` to execute tests.
- Example: `tests/RecommendationList.test.ts` asserts recommendation filtering logic.

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/my-feature`
2. Install dependencies and run the dev server locally
3. Add tests for new logic or components
4. Open a pull request with a clear description of changes

Header Section:
<img width="1877" height="572" alt="image" src="https://github.com/user-attachments/assets/6474c480-4466-4422-b8f2-371709c701b5" />

Simulation Section:
<img width="1884" height="721" alt="image" src="https://github.com/user-attachments/assets/859035da-37ae-48d4-81fe-f54beaa354f3" />

Skills and Recommendation Section:
<img width="1871" height="570" alt="image" src="https://github.com/user-attachments/assets/886f6455-0bf6-48e3-95d0-5e843714683b" />

# 🧠 Approach & Key Design Decisions

This project follows a **component-driven and modular architecture** designed for clarity, reusability, and fast iteration. The goal was to create a compact, easy-to-extend learner dashboard with predictable state and clean UI components.

---

## **1. Component-first UI design**
The UI is composed of small, reusable components such as:
- `KpiCard`
- `SimulationCard`
- `SkillCard`
- `AvatarBadge`

Benefits:
- Consistent styling and spacing  
- Easier debugging and refactoring  
- Clear separation between presentation and domain logic  

---

## **2. Lightweight state management with Zustand**
Zustand was selected instead of Redux or Context because:
- minimal API surface  
- excellent performance (no unnecessary re-renders)  
- simple store structure fits dashboards well  
- works naturally with both Server + Client Components  

Global state currently contains: user, skills, simulations, selectedSkill


This keeps the data flow predictable while avoiding unnecessary global state.

---

## **3. Mock-data-driven development**
All application data comes from `src/data/*` during development.

Advantages:
- No dependency on backend or network  
- Deterministic test cases  
- Fast development iteration  
- Easy to replace with real APIs later  

---

## **4. Domain logic encapsulated in feature modules**
Logic is separated by domain inside `src/modules/`:
- `skills`  
- `simulations`  
- `recommendations`  

The recommendation system lives in: src/modules/recommendations/getRecommendations.ts
It is unit-tested independently (`tests/RecommendationList.test.ts`) to ensure correctness without depending on UI.

---

## **5. Recharts for lightweight data visualization**
Recharts was chosen because it is:
- lightweight  
- highly customizable  
- easy to integrate into small dashboard visualizations  
- stable and minimal for KPI-style charts  

---

## **6. Hybrid architecture with Server + Client Components**
- Layout, routing, and data wiring → **Server Components**  
- Charts, interactions, and state updates → **Client Components**  

This provides:
- Fast SSR performance  
- Fully interactive components where needed  

---

# ⚖️ Trade-offs Due to Time Constraints

## **1. No real API integration**
The dashboard uses static local mock data.  
This avoids network complexity but does not demonstrate fetching, caching, or server-side validation.

---

## **2. Limited test coverage**
Only recommendation logic is unit tested.  
Due to time constraints, missing test areas include:
- Zustand store logic  
- UI rendering + snapshot tests  
- integration tests  
- E2E tests  

---

## **3. Simplified global state**
Only essential state is stored.  
More complex flows (progress history, multiple skill selection, etc.) were out of scope to keep the dashboard focused.

---

## **4. Basic UI styling (no design system yet)**
While Tailwind CSS provides fast styling, the project does not yet include:
- shared tokens (spacing, colors, typography)  
- reusable UI primitives (Button, Card, Badge)  

---

## **5. Limited accessibility**
Not implemented due to time:
- keyboard navigation  
- ARIA roles  
- focus states  

---

## **6. Simplified charts**
Charts currently lack:
- animation transitions  
- responsive resizing  
- dynamic tooltips  
- mobile optimization  

---

# 🚀 What I Would Improve With More Time

## **1. Integrate real APIs**
Use React Query or similar for:
- fetching  
- caching  
- optimistic updates  
- error handling  

---

## **2. Build a reusable design system**
Introduce shared primitives:
- Button  
- Card  
- Badge  
- Typography scale  
- Spacing + color tokens  

This makes UI more consistent and scalable.

---

## **3. Expand chart features**
Improve visual insights by adding:
- animations  
- responsive sizing  
- meaningful tooltips  
- multi-period skill trends  

---

## **4. Enhance the recommendation engine**
Add features such as:
- multi-factor scoring (difficulty, history, interest)  
- personalization per learner  
- explanation tooltips (“why this simulation?”)  

---

## **5. Improve test coverage**
Add:
- Zustand store tests  
- rendering tests  
- integration tests  
- E2E scenarios using Playwright  

---

## **6. Better UX polish**
- skeleton loaders  
- micro-interactions  
- smoother animations  
- improved spacing & layout hierarchy  
- complete mobile layout  

---

## **7. Add activity tracking and learner goals**
Potential future improvements:
- “Continue where you left off”  
- Weekly goals & streaks  
- Skill progression history  

---





