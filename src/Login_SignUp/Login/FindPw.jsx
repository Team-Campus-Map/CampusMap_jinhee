import React from "react";
import containerStyle from "../container.module.css";
import FindPwInput from "./FindPwInput";
const FindPw = (props) => {
  return (
    <div className={containerStyle.findpassword__form}>
      <form action="#" className={containerStyle.form} id="form1" method="post">
        <h2 className={containerStyle["form__title"]}>Find Password</h2>
        <FindPwInput placeholder=" Username" />
        <FindPwInput placeholder=" Id (Email) " />

        <button className={containerStyle.btn}>Find</button>
      </form>
    </div>
  );
};

export default FindPw;
