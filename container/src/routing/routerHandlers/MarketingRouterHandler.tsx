import { lazy, Suspense } from "react";
import useSyncContainerRouter from "../../hooks/useSyncContainerRouter";
const MarketingLazy = lazy(() => import("../../apps/MarketingApp"));

const MarketingRouterHandler = () => {
  useSyncContainerRouter({ basepath: "marketing" });

  return (
    <Suspense>
      <MarketingLazy />
    </Suspense>
  );
};

export default MarketingRouterHandler;
