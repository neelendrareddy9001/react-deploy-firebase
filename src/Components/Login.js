import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
      <div className="login-app">
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="btn">Sign In</button>
        <div className="links">
          <a href="#forgot">Forgot password?</a>
          <a href="#create">Creat an Account</a>
        </div>
        <div className="line"></div>
        <div className="icons">
          {/* <div className="media-options">
            <a href="#facebook" className="field facebook">
              <FaFacebookF className="facebook-icon" />
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="media-options">
            <a href="#google" className="field google">
              <img src={Google} alt="google" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div> */}
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
