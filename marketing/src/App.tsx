import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";

const router = createBrowserRouter(
  [
    {
      path: "/marketing/",
      children: [
        {
          path: "landing",
          element: <LandingPage />,
        },
        {
          path: "pricing",
          element: <PricingPage />,
        },
      ],
    },
  ],  
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
