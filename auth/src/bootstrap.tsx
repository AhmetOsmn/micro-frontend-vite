import { createRoot } from "react-dom/client";
import App, { Callback } from "./App";

const mount = (el: Element, { onSignIn, onSignUp }: Callback) => {
  if (el) {
    const root = createRoot(el);
    root.render(<App onSignIn={onSignIn} onSignUp={onSignUp} />);
  }
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_auth-dev-root");
  if (devRoot) {
    mount(devRoot, {});
  }
}

export { mount };

