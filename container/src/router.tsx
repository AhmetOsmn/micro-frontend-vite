import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Progress from "./components/Progress";

const DashboardLazy = lazy(() => import("dashboard/DashboardPage"));
const SignUpPageLazy = lazy(() => import("auth/SignUpPage"));
const SignInPageLazy = lazy(() => import("auth/SignInPage"));
const LandingPageLazy = lazy(() => import("marketing/LandingPage"));
const PricingPageLazy = lazy(() => import("marketing/PricingPage"));

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
        element: (
          <Suspense fallback={<Progress />}>
            <DashboardLazy />
          </Suspense>
        ),
      },
      {
        path: "/marketing/landing",
        element: (
          <Suspense fallback={<Progress />}>
            <LandingPageLazy />
          </Suspense>
        ),
      },
      {
        path: "/marketing/pricing",
        element: (
          <Suspense fallback={<Progress />}>
            <PricingPageLazy />
          </Suspense>
        ),
      },
      {
        path: "/auth/signup",
        element: (
          <Suspense fallback={<Progress />}>
            <SignUpPageLazy />
          </Suspense>
        ),
      },
      {
        path: "/auth/signin",
        element: (
          <Suspense fallback={<Progress />}>
            <SignInPageLazy />
          </Suspense>
        ),
      },
    ],
  },
]);
