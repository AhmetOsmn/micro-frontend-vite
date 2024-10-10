import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import useSyncContainerRouter from "./Hooks/useSyncContainerRouter";

const MarketingLazy = lazy(() => import("./Apps/MarketingApp"));

const ContainerMarketingRouterHandler = () => {
  useSyncContainerRouter({ basepath: "marketing" });

  return (
    <Suspense>
      <MarketingLazy />
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
        path: "/marketing/*",
        element: <ContainerMarketingRouterHandler />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
