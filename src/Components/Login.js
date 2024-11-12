import React, { useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitBtn = () => {};
  return (
    <div>
      <h3>Login</h3>
      <div className="login-app">
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSubmitBtn}>
          Sign In
        </button>
        <div className="links">
          <a href="#forgot">Forgot password?</a>
          <a href="#create">Creat an Account</a>
        </div>
        <div className="line"></div>
        <div className="icons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <CgMail className="icon" />
          <FaGithub className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
