// components/CombinedSignupForm.js
import Link from "next/link";
import Image from "next/image";

import React from "react";
import styles from "../../styles/CombinedSignupForm.module.css";

const CombinedSignupForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftImage}>
        <Image
          src="/images/image.jpeg"
          alt="Left Image"
          className={styles.image}
          width={300} // Specify the width of the image
          height={200} //
        />
      </div>
      <div className={`${styles.rightSignupForm} ${styles.overflowHidden}`}>
        <div className={styles.rightCornerSection}>
          <div>
            <p>
              Already a member?{" "}
              <a href="#" className={styles.signInLink}>
                Sign in
              </a>
            </p>
          </div>
        </div>
        <div className={styles.signupHeader}>
          <h2>Sign up to Dribble</h2>
        </div>
        <form className={styles.form}>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className={styles.inputGroup}>
                <label
                  htmlFor="name"
                  className={`${styles.label} form-label fw-bold`}
                >
                  Name
                </label>
                <input
                  type="text"
                  className={styles.input}
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.inputGroup}>
                <label
                  htmlFor="username"
                  className={`${styles.label} form-label fw-bold`}
                >
                  Username
                </label>
                <input
                  type="text"
                  className={styles.input}
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
            </div>
          </div>

          <div className={`${styles.formGroup} row mb-3`}>
            <div className="col">
              <div className={styles.inputGroup}>
                <label
                  htmlFor="email"
                  className={`${styles.label} form-label fw-bold`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={styles.input}
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.formGroup} row mb-3`}>
            <div className="col">
              <div className={styles.inputGroup}>
                <label
                  htmlFor="password"
                  className={`${styles.label} form-label fw-bold`}
                >
                  Password
                </label>
                <input
                  type="password"
                  className={styles.input}
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>
        </form>
        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Creating an account means you&apos;re okay with our{" "}
            <span className={styles.lightPurpleBlue}>Terms of Service</span>,{" "}
            <span className={styles.lightPurpleBlue}>Privacy Policy</span>, and{" "}
            <span className={styles.lightPurpleBlue}>
              Notification Settings
            </span>
            .
          </label>
        </div>
        <Link href="/create-profile" className={styles.signupButton}>
          {" "}
          {/* Navigate to "create-profile" page */}
          <button className={styles.signupButton} type="button">
            Create Account
          </button>
        </Link>
        <p className={styles.footerText}>
          This site is protected by reCAPTCHA and the Google{" "}
          <span className={styles.lightPurpleBlue}>Privacy Policy</span> and{" "}
          <span className={styles.lightPurpleBlue}>Terms of Service</span>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default CombinedSignupForm;
