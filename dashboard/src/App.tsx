import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";



const router = createBrowserRouter(
  [
    {
      path: "/dashboard",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
      ],
    },
  ], 
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
