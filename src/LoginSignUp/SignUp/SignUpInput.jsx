import React, { useState } from "react";

import "../../CSS/login.css";
const SignUpInput = ({ placeholder, id, name }) => {
  // const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  return (
    <input
      className="input"
      type="text"
      name={name}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default SignUpInput;
