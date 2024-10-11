import { lazy, Suspense } from "react";
import useSyncContainerRouter from "../../hooks/useSyncContainerRouter";

const DashboardLazy = lazy(() => import("../../apps/DashboardApp"));

const DashboardRouterHandler = () => {
  useSyncContainerRouter({ basepath: "dashboard" });

  return (
    <Suspense>
      <DashboardLazy />
    </Suspense>
  );
};

export default DashboardRouterHandler;
