import { mount } from "dashboard/DashboardApp";
import { useEffect, useRef } from "react";
const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
