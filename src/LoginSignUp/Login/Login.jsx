import React, { useState } from "react";
import "../../CSS/login.css";
import ForgotYourPw from "./ForgotYourPw";

const Login = (props) => {
  return (
    <div className="container__form container--signin">
      <form action="#" className="form" id="form2" method="post">
        <h2 className="form__title">Login</h2>
        <input type="text" placeholder="Username" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <ForgotYourPw />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
