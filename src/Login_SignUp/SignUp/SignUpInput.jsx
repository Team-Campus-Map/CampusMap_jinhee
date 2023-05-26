import React from "react";
import containerStyle from "../container.module.css";
const SignUpInput = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className={containerStyle.input}
    />
  );
};

export default SignUpInput;
