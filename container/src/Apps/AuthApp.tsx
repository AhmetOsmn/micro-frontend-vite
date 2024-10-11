import { mount } from "auth/AuthApp";
import { useEffect, useRef } from "react";

const AuthApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
