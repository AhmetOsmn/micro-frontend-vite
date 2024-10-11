import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "./hooks/useSyncGlobalRouter";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";

const RouterHandler = () => {
  useSyncGlobalRouter({ basename: "/marketing" });

  return <Outlet />;
};

const router = createMemoryRouter(
  [
    {
      path: "/",
      element: <RouterHandler />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "pricing",
          element: <PricingPage />,
        },
      ],
    },
  ],
  { initialEntries: [location.pathname.replace("/marketing", "") || "/"] }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
