import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "./Hooks/useSyncGlobalRouter";
import LandingPage from "./Pages/LandingPage";
import PricingPage from "./Pages/PricingPage";

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
