import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "./Hooks/useSyncGlobalRouter";
import DashboardPage from "./Pages/DashboardPage";

const RouterHandler = () => {
  useSyncGlobalRouter({ basename: "/dashboard" });

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
          element: <DashboardPage />,
        },
      ],
    },
  ],
  { initialEntries: [location.pathname.replace("/dashboard", "") || "/"] }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
