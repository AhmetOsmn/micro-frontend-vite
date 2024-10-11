import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import AuthRouterHandler from "./routerHandlers/AuthRouterHandler";
import DashboardRouterHandler from "./routerHandlers/DashboardRouterHandler";
import MarketingRouterHandler from "./routerHandlers/MarketingRouterHandler";

export const router = createBrowserRouter([
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
          element: <DashboardRouterHandler />,
        },
        {
          path: "/marketing/*",
          element: <MarketingRouterHandler />,
        },
        {
          path: "/auth/*",
          element: <AuthRouterHandler />,
        },
      ],
    },
  ]);