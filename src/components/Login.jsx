import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../assets/css/Login.module.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassLogin, setShowPassLogin] = useState(false);
  const [showPassRegister, setShowPassRegister] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <div className={styles["form-box"]}>
        <div className={styles["button-box"]}>
          <div className={styles.btn} style={{ left: isLogin ? "0px" : "110px" }}></div>
          <button type="button" className={styles["toggle-btn"]} onClick={() => setIsLogin(true)}>Log In</button>
          <button type="button" className={styles["toggle-btn"]} onClick={() => setIsLogin(false)}>Register</button>
        </div>

        <div className={styles["social-icons"]}>
          <a href="https://facebook.com"><img src="/home/fb.webp" alt="Facebook" /></a>
          <a href="https://twitter.com"><img src="/home/tw.png" alt="Twitter" /></a>
          <a href="https://gmail.com"><img src="/home/gm.ico" alt="Gmail" /></a>
        </div>

        {/* Login Form */}
        <form
          className={styles["input-group"]}
          id="login"
          style={{ left: isLogin ? "50px" : "-400px" }}
          onSubmit={e => {
            e.preventDefault();
            localStorage.setItem("user", JSON.stringify({ name: "Guest" }));
            navigate("/explore");
          }}
        >
          <input
            type="text"
            className={styles["input-field"]}
            placeholder="Enter Username"
            required
            autoComplete="username"
          />
          <div className={styles["password-field"]}>
            <input
              type={showPassLogin ? "text" : "password"}
              className={styles["input-field"]}
              placeholder="Enter Password"
              required
              autoComplete="current-password"
            />
          </div>
          <input type="checkbox" className={styles["check-box"]} required />
          <span className={styles.policyText}>Remember Password</span>
          <button type="submit" className={styles["submit-btn"]}>Log In</button>
        </form>

        {/* Register Form */}
        <form
          className={styles["input-group"]}
          id="register"
          style={{ left: isLogin ? "450px" : "50px" }}
          onSubmit={e => {
            e.preventDefault();
            localStorage.setItem("user", JSON.stringify({ name: "Guest" }));
            navigate("/explore");
          }}
        >
          <input
            type="text"
            className={styles["input-field"]}
            placeholder="Enter Username"
            required
            autoComplete="username"
          />
          <input
            type="email"
            className={styles["input-field"]}
            placeholder="Enter Email"
            required
            autoComplete="email"
          />
          <div className={styles["password-field"]}>
            <input
              type={showPassRegister ? "text" : "password"}
              className={styles["input-field"]}
              placeholder="Enter Password"
              required
              autoComplete="new-password"
            />
          </div>
          <input type="checkbox" className={styles["check-box"]} required />
          <a href="/privacy"><span className={styles.policyText}> I agree to the privacy policy </span></a>
          <button type="submit" className={styles["submit-btn"]}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
