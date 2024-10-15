import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";

import SignInPage from "auth/SignInPage";
import SignUpPage from "auth/SignUpPage";
import DashboardPage from "dashboard/DashboardPage";
import LandingPage from "marketing/LandingPage";
import PricingPage from "marketing/PricingPage";
import Home from "./components/Home";

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
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/marketing/landing",
        element: <LandingPage />,
      },
      {
        path: "/marketing/pricing",
        element: <PricingPage />,
      },
      {
        path: "/auth/signup",
        element: <SignUpPage />,
      },
      {
        path: "/auth/signin",
        element: <SignInPage />,
      },
    ],
  },
]);
