import React, { useState } from "react";
import containerStyle from "../container.module.css";

import SignUpInput from "./SignUpInput";

const SignUp = (props) => {
  //카드 정보 스크롤
  // window.addEventListener("scroll", () => {
  //   const element = document.getElementsByClassName("checkbox");
  //   const rect = element.getBoundingClientRect();
  //   const viewHeight = Math.max(
  //     document.documentElement.clientHeight,
  //     window.innerHeight
  //   );

  //   if (rect.top <= viewHeight && rect.bottom >= 0) {
  //     element.style.display = "block";
  //   } else {
  //     element.style.display = "none";
  //   }
  // });
  return (
    <div
      className={
        containerStyle.container__form +
        " " +
        containerStyle["container--signup"]
      }
    >
      <form action="#" className={containerStyle.form} id="form1" method="post">
        <h2 className={containerStyle["form__title"]}>Sign Up</h2>
        <SignUpInput placeholder=" Username" />
        <SignUpInput placeholder=" Id (Email) " />
        <SignUpInput placeholder=" Password" />
        <SignUpInput placeholder=" Password Check" />
        <SignUpInput placeholder=" Phone number" />
        <input type="checkbox" className={containerStyle.checkbox} />

        <button className={containerStyle.btn}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
