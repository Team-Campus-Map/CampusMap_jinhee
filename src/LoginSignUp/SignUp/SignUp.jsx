import React, { useState, useEffect } from "react";
import "../../CSS/login.css";
import SignUpInput from "./SignUpInput";
const SignUp = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [checkPassword, setCheckPassword] = useState("📝패스워드 입력📝");
  const signupInput = {
    input1: {
      name: "name",
      placeholder: "이름",
    },
    input2: {
      name: "email",
      placeholder: "이메일",
    },
    input3: {
      name: "phonenumber",
      placeholder: "휴대폰 번호",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setpassword(value);
    } else if (name === "passwordCheck") {
      setPasswordCheck(value);
    } else if (name === "phonenumber") {
      setPhonenumber(value);
    }

    if (name !== "name") {
      setTimeout(handleCheck, 100);
    }
  };

  const handleCheck = () => {
    if (password.length < 1 || passwordCheck.length < 1) {
      setCheckPassword("📝패스워드 입력📝");
    } else if (password === passwordCheck) {
      setCheckPassword("✅일치 ✅");
    } else {
      setCheckPassword("❌불일치 ❌");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      name: name,
      password: password,
      passwordCheck: passwordCheck,
    });

    setName("");
    setpassword("");
    setPasswordCheck("");
    setCheckPassword("📝패스워드 입력📝");
  };
  return (
    <>
      <div className="container__form container--signup">
        <form className="form" id="form1" onSubmit={handleSubmit}>
          <h2 className="form__title">Sign Up</h2>
          <SignUpInput
            {...signupInput.input1}
            value={name}
            onChange={handleChange}
          />
          <SignUpInput
            {...signupInput.input2}
            value={name}
            onChange={handleChange}
          />
          <input
            type="password"
            className="input"
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="비밀번호"
          />
          <input
            type="password"
            className="input"
            name="passwordCheck"
            onChange={handleChange}
            value={passwordCheck}
            placeholder="비밀번호 확인"
          />

          <SignUpInput
            {...signupInput.input3}
            value={name}
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>

      {/* <div className="showText">
        <div>이름 : {name} </div>
        <div>비밀번호 : {password}</div>
        <div>비밀번호확인 : {passwordCheck}</div>
        <div>일치여부 : {checkPassword}</div>
      </div> */}
    </>
  );
};

export default SignUp;
