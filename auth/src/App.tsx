import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "./hooks/useSyncGlobalRouter";
import SignInPage, { SignInDto } from "./pages/SignInPage";
import SignUpPage, { SignUpDto } from "./pages/SignUpPage";

const RouterHandler = () => {
  useSyncGlobalRouter({ basename: "/auth" });

  return <Outlet />;
};

export type Callback = {
  onSignIn?: (signInDto: SignInDto) => void;
  onSignUp?: (signUpDto: SignUpDto) => void;
};

function App({ onSignIn, onSignUp }: Callback) {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <RouterHandler />,
        children: [
          {
            index: true,
            element: <SignInPage onSignIn={onSignIn} />,
          },
          {
            path: "signup",
            element: <SignUpPage onSignUp={onSignUp} />,
          },
        ],
      },
    ],
    { initialEntries: [location.pathname.replace("/auth", "") || "/"] }
  );

  return <RouterProvider router={router} />;
}

export default App;
