# Learner Dashboard (Edtronaut)

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


