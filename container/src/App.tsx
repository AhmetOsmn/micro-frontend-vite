import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import useSyncContainerRouter from "./Hooks/useSyncContainerRouter";

const MarketingLazy = lazy(() => import("./Apps/MarketingApp"));
const DashboardLazy = lazy(() => import("./Apps/DashboardApp"));
const AuthLazy = lazy(() => import("./Apps/AuthApp"));

const ContainerMarketingRouterHandler = () => {
  useSyncContainerRouter({ basepath: "marketing" });

  return (
    <Suspense>
      <MarketingLazy />
    </Suspense>
  );
};

const ContainerDashboardRouterHandler = () => {
  useSyncContainerRouter({ basepath: "dashboard" });

  return (
    <Suspense>
      <DashboardLazy />
    </Suspense>
  );
};

const ContainerAuthRouterHandler = () => {
  useSyncContainerRouter({ basepath: "auth" });

  return (
    <Suspense>
      <AuthLazy />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard/*",
        element: <ContainerDashboardRouterHandler />,
      },
      {
        path: "/marketing/*",
        element: <ContainerMarketingRouterHandler />,
      },
      {
        path: "/auth/*",
        element: <ContainerAuthRouterHandler />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
