import React from "react";
import "../../CSS/login.css";
import FindPwInput from "./FindPwInput";
const FindPw = (props) => {
  return (
    <div className="findpassword__form">
      <form action="#" className="form" id="form1" method="post">
        <h2 className="form__title">Find Password</h2>
        <FindPwInput placeholder=" Username" />
        <FindPwInput placeholder=" Id (Email) " />

        <button className="btn">Find</button>
      </form>
    </div>
  );
};

export default FindPw;
