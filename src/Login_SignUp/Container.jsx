import React, { useState } from "react";
import Login from "./Login/Login";
import containerStyle from "./container.module.css";
import SignUp from "./SignUp/SignUp";

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
      className={`${containerStyle.container} ${
        containerActive ? containerStyle["right-panel-active"] : ""
      }`}
    >
      <Login />
      <SignUp />
      <div className={containerStyle.container__overlay}>
        <div className={containerStyle.overlay}>
          <div
            className={`${containerStyle.overlay__panel} ${containerStyle["overlay--left"]}`}
          >
            <button className={containerStyle.btn} onClick={handleSignInClick}>
              Login
            </button>
          </div>
          <div
            className={`${containerStyle.overlay__panel} ${containerStyle["overlay--right"]}`}
          >
            <button className={containerStyle.btn} onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
