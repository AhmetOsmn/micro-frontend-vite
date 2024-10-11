import { SignInDto, SignUpDto } from "../../../apps/AuthApp";
import { User } from "./User";

export type AuthContextType = {
  user: User | null;
  login: (signInDto: SignInDto) => void;
  register: (signUpDto: SignUpDto) => void;
  logout: () => void;
};
