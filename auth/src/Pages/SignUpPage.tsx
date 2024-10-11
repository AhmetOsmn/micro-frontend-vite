import { Link } from "react-router-dom";
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
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
        <div className={styles.formGroup}>
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            className={styles.inputField}
            placeholder="Password Confirm"
          />
        </div>
        <div className={styles.formActions}>
          <button className={styles.btnPrimary}>
            Sign Up
          </button>
          <Link to="/" className={styles.btnSecondary}>
            Return Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;