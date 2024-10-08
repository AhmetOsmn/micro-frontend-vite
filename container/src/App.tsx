import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./_route/MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
