import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SignInPage, { SignInDto } from "./pages/SignInPage";
import SignUpPage, { SignUpDto } from "./pages/SignUpPage";

function App() {
  const onSignIn = (signInDto: SignInDto) => {
    console.log(signInDto);
  };

  const onSignUp = (signUpDto: SignUpDto) => {
    console.log(signUpDto);
  };

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Outlet />,
      children: [
        {
          path: "signin",
          element: <SignInPage onSignIn={onSignIn} />,
        },
        {
          path: "signup",
          element: <SignUpPage onSignUp={onSignUp} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
