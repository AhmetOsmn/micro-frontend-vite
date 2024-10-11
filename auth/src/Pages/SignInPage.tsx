import { Link } from "react-router-dom";
import styles from './SignInPage.module.css'; // CSS modülünü import ediyoruz.

const SignInPage = () => {
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
          />
        </div>
        <div className={styles.formActions}>
          <button className={styles.btnPrimary}>
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
