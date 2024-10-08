import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PricingPage from "./Pages/PricingPage";

const router = createBrowserRouter([
  {
    path: "pricing",
    element: <PricingPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
