import { lazy, Suspense } from "react";
import useSyncContainerRouter from "../../Hooks/useSyncContainerRouter";
const AuthLazy = lazy(() => import("../../apps/AuthApp"));

const AuthRouterHandler = () => {
  useSyncContainerRouter({ basepath: "auth" });

  return (
    <Suspense>
      <AuthLazy />
    </Suspense>
  );
};

export default AuthRouterHandler;
