import React, { useState } from "react";
import containerStyle from "../container.module.css";
import ForgotYourPw from "./ForgotYourPw";
import SocialLogin from "./KakaoLogin/SocialLogin";
const Login = (props) => {
  return (
    <div
      className={
        containerStyle.container__form +
        " " +
        containerStyle["container--signin"]
      }
    >
      <form action="#" className={containerStyle.form} id="form2" method="post">
        <h2 className={containerStyle["form__title"]}>ㅤㅤㅤㅤㅤ</h2>
        <input
          type="text"
          placeholder="Username"
          className={containerStyle.input}
        />
        <input
          type="password"
          placeholder="Password"
          className={containerStyle.input}
        />
        <ForgotYourPw />
        <button className={containerStyle.btn}>Login</button>
        <div className={containerStyle.divider}>
          <span>or</span>
        </div>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Login;
