import React, { useState } from "react";
import { useNavigate,Link } from 'react-router-dom';
import styles from "../assets/css/Login.module.css";
import "../components/Privacy";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassLogin, setShowPassLogin] = useState(false);
  const [showPassRegister, setShowPassRegister] = useState(false);
  const [message, setMessage] = useState("");
  const [msgColor, setMsgColor] = useState("red");
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <div className={styles["form-box"]}>
        <div className={styles["button-box"]}>
          <div className={styles.btn} style={{ left: isLogin ? "0px" : "110px" }}></div>
          <button type="button" className={styles["toggle-btn"]} onClick={() => { setIsLogin(true); setMessage(""); }}>
            Log In
          </button>
          <button type="button" className={styles["toggle-btn"]} onClick={() => { setIsLogin(false); setMessage(""); }}>
            Register
          </button>
        </div>

        <div
          className={styles["form-slider"]}
          style={{ transform: isLogin ? "translateX(0%)" : "translateX(-50%)" }}
        >
          {/* Login Form */}
          <form
            className={styles["input-group"]}
            style={{ left: isLogin ? "50px" : "-400px" }}
          onSubmit={async (e) => {
            e.preventDefault();
            setMessage("");

            const username = e.target[0].value;
            const password = e.target[1].value;

            const res = await fetch("https://vgbnd.onrender.com/api/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok) {
              localStorage.setItem("user", JSON.stringify(data.user));
              setMsgColor("black");
              setMessage("Login Successful ✅");
              setTimeout(() => navigate("/explore"), 1000);
            } else {
              setMsgColor("black");
              setMessage("Username Not Recognized ❌");
            }
            }}
          >
            <div className={styles["social-icons"]}>
              <a href="https://facebook.com"><img src="/home/fb.webp" alt="Facebook" /></a>
              <a href="https://twitter.com"><img src="/home/tw.png" alt="Twitter" /></a>
              <a href="https://gmail.com"><img src="/home/gm.ico" alt="Gmail" /></a>
            </div>
            <div className={styles["form-inner"]}>
              <input
                type="text"
                className={styles["input-field"]}
                placeholder="Enter Username"
                required
                autoComplete="username"
              />
              <input
                type={showPassLogin ? "text" : "password"}
                className={styles["input-field"]}
                placeholder="Enter Password" 
                minLength={8}
                required
                autoComplete="current-password"
              />
		
          	{message && <p style={{ marginTop: "10px", color: msgColor }}>{message}</p>}       
		
              <button type="submit" className={styles["submit-btn"]}>Log In</button>
            </div>
          </form>

          {/* Register Form */}
          <form
            className={styles["input-group"]}
            style={{ left: isLogin ? "450px" : "50px" }}
            onSubmit={async (e) => {
              e.preventDefault();
              setMessage("");

              const username = e.target[0].value;
              const email = e.target[1].value;
              const password = e.target[2].value;

              const res = await fetch("https://vgbnd.onrender.com/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
              });

              const data = await res.json();

              if (res.ok) {
                setMsgColor("green");
                setMessage("Registration successful ✅");
                setIsLogin(true);
              } else {
                setMsgColor("red");
                setMessage(` ${data.msg}❌`);
              }
            }}
          >
            <div className={styles["social-icons"]}>
              <a href="https://facebook.com"><img src="/home/fb.webp" alt="Facebook" /></a>
              <a href="https://twitter.com"><img src="/home/tw.png" alt="Twitter" /></a>
              <a href="https://gmail.com"><img src="/home/gm.ico" alt="Gmail" /></a>
            </div>
            <div className={styles["form-inner"]}>
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
              <input
                type={showPassRegister ? "text" : "password"}
                className={styles["input-field"]}
                placeholder="Enter Password"
                minLength={8}
                required
                autoComplete="new-password"
              />
              <div className={styles["checkbox-container"]}>
                <input type="checkbox" className={styles["check-box"]} required />
                <Link to="/Privacy">
                  <span className={styles.policyText}>I agree to the privacy policy</span>
                </Link>
              </div>
              {message && <p style={{ marginTop: "10px", color: msgColor }}>{message}</p>}
              <button type="submit" className={styles["submit-btn"]}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
