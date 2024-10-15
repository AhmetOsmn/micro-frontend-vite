import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.css";

type Props = {
  onSignUp?: (signUpDto: SignUpDto) => void;
};

export type SignUpDto = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
};

const SignUpPage = ({ onSignUp }: Props) => {
  const [signUpDto, setSignUpDto] = useState<SignUpDto>({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp(signUpDto);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <p className={styles.signupTitle}>Sign Up</p>
      <form className={styles.signupForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.inputField}
            placeholder="Username"
            onChange={(e) =>
              setSignUpDto({ ...signUpDto, username: e.target.value })
            }
            value={signUpDto.username}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={styles.inputField}
            placeholder="First Name"
            onChange={(e) =>
              setSignUpDto({ ...signUpDto, firstName: e.target.value })
            }
            value={signUpDto.firstName}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={styles.inputField}
            placeholder="Last Name"
            onChange={(e) =>
              setSignUpDto({ ...signUpDto, lastName: e.target.value })
            }
            value={signUpDto.lastName}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.inputField}
            placeholder="Password"
            onChange={(e) =>
              setSignUpDto({ ...signUpDto, password: e.target.value })
            }
            value={signUpDto.password}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            className={styles.inputField}
            placeholder="Password Confirm"
            onChange={(e) =>
              setSignUpDto({ ...signUpDto, passwordConfirm: e.target.value })
            }
            value={signUpDto.passwordConfirm}
          />
        </div>
        <div className={styles.formActions}>
          <button
            className={styles.btnPrimary}
            onClick={handleSignUp}
            type="button"
          >
            Sign Up
          </button>
          <Link to="/auth/signin" className={styles.btnSecondary}>
            Return Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
