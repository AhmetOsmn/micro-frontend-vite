import SignInPage from "auth/SignInPage";
import SignUpPage from "auth/SignUpPage";
import DashboardPage from "dashboard/DashboardPage";
import LandingPage from "marketing/LandingPage";
import PricingPage from "marketing/PricingPage";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Root from "./Root";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/auth/signin" element={<SignInPage />} />
          <Route path="/auth/signup" element={<SignUpPage />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Not Found</h1>
              </div>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
