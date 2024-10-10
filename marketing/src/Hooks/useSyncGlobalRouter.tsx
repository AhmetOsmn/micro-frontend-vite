import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type RouteEvent = CustomEvent<string>;

interface UseSyncGlobalRouterProps {
  basename: string;
}

const useSyncGlobalRouter = ({ basename }: UseSyncGlobalRouterProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("basename", basename);

  const newPath = `${basename}${
    location.pathname === "/" ? "" : location.pathname
  }`;

  console.log("newPath", newPath);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("container", { detail: newPath }));

    const shellNavigated = ({ detail }: RouteEvent) => {
      if (detail === location.pathname) {
        return;
      }
      window.history.pushState({}, '', detail); 
      navigate(detail);
    };

    window.addEventListener("shell", shellNavigated as EventListener);

    return () => {
      window.removeEventListener("shell", shellNavigated as EventListener);
    };
  }, [location, navigate, newPath]);

  return null;
};

export default useSyncGlobalRouter;
