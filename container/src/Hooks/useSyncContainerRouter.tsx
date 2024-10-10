import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type RouteEvent = CustomEvent<string>;

interface useSyncContainerRouterProps {
  basepath: string;
}

const useSyncContainerRouter = ({ basepath }: useSyncContainerRouterProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const containerNavigated = ({ detail }: RouteEvent) => {
      if (detail === location.pathname) {
        return;
      }
      navigate(detail);
    };

    window.addEventListener("container", containerNavigated as EventListener);

    return () => {
      window.removeEventListener(
        "container",
        containerNavigated as EventListener
      );
    };
  }, [location, basepath, navigate]);

  useEffect(() => {
    if (location.pathname.startsWith(basepath)) {
      window.dispatchEvent(
        new CustomEvent("shell", {
          detail: location.pathname.replace(basepath, ""),
        })
      );
    }
  }, [location, basepath]);
};

export default useSyncContainerRouter;
