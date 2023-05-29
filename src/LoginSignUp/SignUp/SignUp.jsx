import React from "react";

import "../../CSS/login.css";

import SignUpInput from "./SignUpInput";
import swal from "sweetalert";

const SignUp = (props) => {
  const handleSignUp = () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordCheck = document.getElementById("passwordCheck").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const agreedTerms = document.getElementById("agreedTerms").checked;

    const formData = {
      username,
      email,
      password,
      passwordCheck,
      phoneNumber,
      agreedTerms,
    };
    console.log(JSON.stringify(formData));

    const loginResult = {
      success: true,
      username: "jinny",
    };
    if (loginResult.success) {
      swal(
        "회원가입 성공!",
        username + "님, 회원가입이 완료되었습니다!",
        "success"
      );
      // .then(() => {
      //   window.location.href = `${pageContext.request.contextPath}/`;
      // });
    } else {
      swal("회원가입 실패!", "다시 시도해주세요!", "warning");
    }
  };

  return (
    <div className="container__form container--signup">
      <div className="form" id="form1">
        <h2 className="form__title">Sign Up</h2>
        <SignUpInput placeholder="Username" id="username" />
        <SignUpInput placeholder="Email" id="email" />
        <input
          className="input inputpw"
          placeholder="Password"
          type="password"
          id="password"
        />
        <input
          className="input"
          placeholder="Password Check"
          type="password"
          id="passwordCheck"
        />
        <SignUpInput placeholder="Phone number" id="phoneNumber" />
        <input type="checkbox" className="checkbox" id="agreedTerms" />

        <button className="btn" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
