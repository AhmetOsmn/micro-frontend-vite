import { mount } from "auth/AuthApp";
import { useEffect, useRef } from "react";
import { useAuth } from "../contexts/auth/hooks";

export type SignInDto = {
  username: string;
  password: string;
};

export type SignUpDto = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
};

const AuthApp = () => {
  const ref = useRef(null);

  const { login, register } = useAuth();

  const onSignIn = (signInDto: SignInDto) => {
    login(signInDto);
  };

  const onSignUp = (signUpDto: SignUpDto) => {
    register(signUpDto);
  };

  useEffect(() => {
    mount(ref.current, { onSignIn, onSignUp });
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
