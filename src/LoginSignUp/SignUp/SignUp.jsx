import React, { useState } from "react";

import "../../CSS/login.css";

import SignUpInput from "./SignUpInput";

const SignUp = (props) => {
  return (
    <div className="container__form container--signup">
      <form action="#" className="form" id="form1" method="post">
        <h2 className="form__title">Sign Up</h2>
        <SignUpInput placeholder=" Username" />
        <SignUpInput placeholder=" Id (Email) " />
        <SignUpInput placeholder=" Password" />
        <SignUpInput placeholder=" Password Check" />
        <SignUpInput placeholder=" Phone number" />
        <input type="checkbox" className="checkbox" />

        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
