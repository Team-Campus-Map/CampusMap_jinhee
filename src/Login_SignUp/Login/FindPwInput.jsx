import React from "react";
import containerStyle from "../container.module.css";
const FindPwInput = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        className={containerStyle.input}
      />
    </div>
  );
};

export default FindPwInput;
