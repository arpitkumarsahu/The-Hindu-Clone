import React, { useState } from "react";
import styles from "./register.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.registerParent}>
      <div className={styles.registerHeader}>
        <div onClick={() => navigate("/")}>
          <BsArrowLeft style={{ marginRight: "2%" }} /> Back to The Hindu
        </div>
        <div>
          <img
            width="100%"
            src="https://www.thehindu.com/theme/images/th-online/logo.png"
            alt="logo"
          />
        </div>
        <div></div>
      </div>
      <div className={styles.registerForm}>
        <h2>Create your account</h2>
        <span>It is quick and easy</span>
        <div className={styles.logInGoogle}>
          <div>
            <FcGoogle
              style={{ width: "21px", height: "21px", marginRight: "2%" }}
            />{" "}
            Continue with <strong>Google</strong>
          </div>
          <div>
            <BsFacebook
              style={{
                color: "rgb(59,89,152)",
                width: "21px",
                height: "21px",
                marginRight: "2%",
              }}
            />{" "}
            Continue with <strong> Facebook</strong>
          </div>
          <div>
            <AiFillApple
              style={{
                color: "black",
                width: "21px",
                height: "21px",
                marginRight: "2%",
              }}
            />{" "}
            Continue with <strong> Apple</strong>
          </div>
        </div>
        <p>or</p>
        <div className={styles.inputBox}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MdAlternateEmail
              style={{
                borderBottom: "1px solid grey",
                fontSize: "20px",
                color: "grey",
                marginTop: "2.1%",
              }}
            />
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5%" }}
          >
            <BiLock
              style={{
                borderBottom: "1px solid grey",
                fontSize: "20px",
                color: "grey",
                marginTop: "2.1%",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5%" }}
          >
            <BiLock
              style={{
                borderBottom: "1px solid grey",
                fontSize: "20px",
                color: "grey",
                marginTop: "2.1%",
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
          <button onClick={() => navigate("/login")}>Register</button>
          <div className={styles.newTab}>Already have an account?</div>
          <div className={styles.createAcc} onClick={() => navigate("/login")}>
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};
