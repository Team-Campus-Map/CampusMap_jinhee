import React, { useState } from "react";

import "../../CSS/login.css";
const SignUpInput = ({ placeholder, id }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input"
      value={value}
      onChange={handleChange}
      id={id}
    />
  );
};

export default SignUpInput;
