import { createContext, useEffect, useState } from "react";
import { SignInDto, SignUpDto } from "../../apps/AuthApp";
import { AuthContextType } from "./types/AuthContextType";
import { AuthProviderProps } from "./types/AuthProviderProps";
import { User } from "./types/User";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [users, setUsers] = useState<User[]>([
    {
      username: "ahmet",
      firstName: "ahmet",
      lastName: "sezgin",
      password: "123",
    },
  ]);
  const [user, setUser] = useState<User | null>(null);

  // const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [])

  const login = (signInDto: SignInDto) => {
    const { username, password } = signInDto;

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser)); 
      // navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  const register = (signUpDto: SignUpDto) => {
    const { username, firstName, lastName, password, passwordConfirm } =
      signUpDto;

    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    const existingUser = users.find((u) => u.username === username);

    if (existingUser) {
      alert("Username already taken");
    } else {
      const newUser: User = { username, firstName, lastName, password };
      setUsers((prevUsers) => [...prevUsers, newUser]);

      setUser(newUser);
      // navigate("/auth");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
