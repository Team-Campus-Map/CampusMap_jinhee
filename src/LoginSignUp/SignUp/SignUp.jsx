import React, { useState, useEffect } from "react";
import "../../CSS/login.css";
import Swal from "sweetalert2";
const SignUp = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      name,
      email,
      password,
      passwordCheck,
      phonenumber,
    });
    if (email.indexOf("@") !== -1) {
      if (password === "" && passwordCheck === "") {
        Swal.fire("회원가입 실패!", "비밀번호를 입력하세요.", "warning");
      } else {
        if (password !== passwordCheck) {
          Swal.fire("회원가입 실패!", "비밀번호를 확인하세요.", "warning");
        } else {
          Swal.fire({
            title: "회원가입 성공!",
            text: name + "님, 회원가입이 완료되었습니다!",
            icon: "success",
          });
        }
      }
    } else {
      // console.log(`email error`);
      Swal.fire("회원가입 실패!", "이메일형식을 확인하세요.", "warning");
    }

    setName("");
    setEmail("");
    setpassword("");
    setPasswordCheck("");
    setPhonenumber("");
    // const loginResult = {
    //   success: true,
    // };
  };
  return (
    <>
      <div className="login-container__form login-container--signup">
        <form className="form" id="form1" onSubmit={handleSubmit}>
          <h2 className="form__title">Sign Up</h2>
          <input
            type="text"
            className="input"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="아이디"
          />
          <input
            type="text"
            className="input"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="이메일"
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
          <input
            className="input"
            name="phonenumber"
            onChange={handleChange}
            value={phonenumber}
            placeholder="휴대폰 번호"
          />
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
