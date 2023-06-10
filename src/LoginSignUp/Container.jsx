import React, { useState } from "react";
import Login from "./Login/Login";
import "../CSS/login.css";

const Container = (props) => {
  const [containerActive, setContainerActive] = useState(false);
  const handleSignInClick = () => {
    setContainerActive(false);
  };

  const handleSignUpClick = () => {
    setContainerActive(true);
  };

  return (
    <div
      className={`login-container ${
        containerActive ? "right-panel-active" : ""
      }`}
    >
      <Login />
      <div className="login-container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="btn" onClick={handleSignInClick}>
              Login
            </button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
