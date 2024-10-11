import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "./hooks/useSyncGlobalRouter";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const RouterHandler = () => {
  useSyncGlobalRouter({ basename: "/auth" });

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
          element: <SignInPage />,
        },
        {
          path: "signup",
          element: <SignUpPage />,
        },
      ],
    },
  ],
  { initialEntries: [location.pathname.replace("/auth", "") || "/"] }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
