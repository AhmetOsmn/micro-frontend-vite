import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
