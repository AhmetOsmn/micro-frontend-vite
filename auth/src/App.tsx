import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "./Hooks/useSyncGlobalRouter";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";

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
