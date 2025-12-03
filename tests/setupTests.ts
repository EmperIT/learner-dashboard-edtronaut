import "@testing-library/jest-dom";

import { useDashboardStore } from "@/store/dashboardStore";

beforeEach(() => {
  useDashboardStore.setState(useDashboardStore.getInitialState());
});
