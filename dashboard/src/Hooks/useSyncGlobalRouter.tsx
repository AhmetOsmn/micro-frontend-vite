import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type RouteEvent = CustomEvent<string>;

interface UseSyncGlobalRouterProps {
  basename: string;
}

const useSyncGlobalRouter = ({ basename }: UseSyncGlobalRouterProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const newPath = `${basename}${
    location.pathname === "/" ? "" : location.pathname
  }`;  

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("container", { detail: newPath }));

    const shellNavigated = ({ detail }: RouteEvent) => {
      if (detail === location.pathname) {
        return;
      }
      navigate(detail);
    };
    
    window.addEventListener("shell", shellNavigated as EventListener);
    
    window.history.pushState({}, '', newPath); 

    return () => {
      window.removeEventListener("shell", shellNavigated as EventListener);
    };
  }, [location, navigate, newPath]);

  return null;
};

export default useSyncGlobalRouter;
