import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "./hooks/useSyncGlobalRouter";
import DashboardPage from "./pages/DashboardPage";

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
