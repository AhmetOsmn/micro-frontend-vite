import { mount } from "auth/AuthApp";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../packages/contexts/appContext/useAppContext";
import { User } from "../packages/dtos/app/User";

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
  const navigate = useNavigate();

  const { users, setUser, createNewUser } = useAppContext();

  const onSignIn = (signInDto: SignInDto) => {
    const { username, password } = signInDto;

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      navigate("/dashboard")
    } else {
      alert("Invalid username or password");
    }
  };

  const onSignUp = (signUpDto: SignUpDto) => {
    const { username, firstName, lastName, password, passwordConfirm } =
      signUpDto;

    if (username.length < 1 || password.length < 1) {
      alert("Username and password can not be empty.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    const existingUser = users.find((u) => u.username === username);

    if (existingUser) {
      alert("Username already taken");
    } else {
      const newUser: User = { username, firstName, lastName, password };
      createNewUser(newUser);
      navigate("/auth")
    }
  };

  useEffect(() => {
    mount(ref.current, { onSignIn, onSignUp });
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
