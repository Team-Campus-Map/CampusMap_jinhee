import React from "react";

import "../../CSS/login.css";
const SignUpInput = (props) => {
  return (
    <input type="text" placeholder={props.placeholder} className="input" />
  );
};

export default SignUpInput;
