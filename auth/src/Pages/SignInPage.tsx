import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignInPage.module.css"; // CSS modülünü import ediyoruz.

type Props = {
  onSignIn?: (signInDto: SignInDto) => void;
};

export type SignInDto = { username: string; password: string };

const SignInPage = ({ onSignIn }: Props) => {
  const [signInDto, setSignInDto] = useState<SignInDto>({
    username: "",
    password: "",
  });

  const handleSignIn = () => {
    if (onSignIn) {
      onSignIn(signInDto);
    }
  };

  return (
    <div className={styles.signinContainer}>
      <p className={styles.signinTitle}>Sign In</p>
      <form className={styles.signinForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.inputField}
            placeholder="Username"
            onChange={(e) =>
              setSignInDto({ ...signInDto, username: e.target.value })
            }
            value={signInDto.username}
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
              setSignInDto({ ...signInDto, password: e.target.value })
            }
            value={signInDto.password}
          />
        </div>
        <div className={styles.formActions}>
          <button
            className={styles.btnPrimary}
            onClick={handleSignIn}
            type="button"
          >
            Sign In
          </button>
          <Link to="/signup" className={styles.btnSecondary}>
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
