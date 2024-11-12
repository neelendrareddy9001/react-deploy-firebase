import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3>Register</h3>
      <div className="register-app">
        <div className="input-box">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="name">Email</label>
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
        <button className="btn" onClick={handleSubmit}>
          Sign Up
        </button>

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

export default Register;
