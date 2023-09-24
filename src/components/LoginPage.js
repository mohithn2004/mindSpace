import React, { useState } from "react";
import "./LoginPage.css";
import HomePage from "./HomePage.tsx";
import ChatBot from "./ChatBot";
import buddha from "../images/buddha.png";

function LoginPage() {
  const [login, setLogin] = useState(false);

  function loggedIn() {
    setLogin(true);
  }

  function loggedOut() {
    setLogin(false);
  }
  return !login ? (
    <div className="login-page">
      <div className="login-content">
        <div>
          <div className="company-title">
            <div classname="Logo">
              <img src={buddha} alt="" width={150} height={150} />
            </div>
            <h2>MindSpace</h2>
          </div>
          <div className="about-us">
            <h1 className="about-us-header">About us</h1>
            <p className="about-us-text">
              "MindSpace is a digital sanctuary where mental well-being meets
              innovation. Our platform leverages advanced sentiment analysis to
              provide real-time emotional insight from recent tweets, empowers
              users with AI-driven tools to sift fact from fiction in news
              headlines, and offers a direct line to report online harassment to
              cybercrime authorities. With our compassionate AI chatbot, we
              guide individuals on a journey from darkness to light, helping
              them conquer depression. Plus, our personalized Search Engine
              curates a wealth of mental health resources, ensuring each user's
              unique needs are met on their path to well-being."
            </p>
          </div>
        </div>
        <div className="login-box">
          <div className="login-info">
            <h1 className="login-into-your-account">Login to your account</h1>
            <form>
              {/* <div className="form-group"> */}
              <div className="username-section">
                <div className="wrapper">
                  <div className="input-data">
                    <input
                      className="username-input"
                      id="gg"
                      type="text"
                      required
                      // onChange={handle}
                      // value={text}
                    />
                    <label htmlFor="gg">Username</label>
                  </div>
                </div>

                <div className="password-section">
                  <div className="wrapper-password">
                    <div className="input-data-password">
                      <input id="hh" type="password" required />
                      <label htmlFor="hh">Password</label>
                    </div>
                  </div>
                  <div className="login-content">
                    <input className="checkbox" type="checkbox" />
                    <p className="remember-me">remember me</p>

                    <a href="#" className="forgot-password">
                      forgot password
                    </a>
                  </div>
                  <div href="#" className="login-button">
                    <div className="login-text" onClick={loggedIn}>
                      Login
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <HomePage />
      <ChatBot />
    </div>
  );
}

export default LoginPage;
