import React, { useState, useEffect } from "react";
import SignUp from "../SignUp/SignUp";
import "../../CSS/login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const LoginPage = () => {
  const [memberInfo, setMemberInfo] = useState([]);
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleCreate = (data) => {
    setMemberInfo((prevMemberInfo) => [...prevMemberInfo, { ...data }]);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedPassword = loginPassword.trimStart();
    console.log(trimmedPassword);
    if (
      memberInfo.length > 0 &&
      trimmedPassword === memberInfo[0].password.toString()
    ) {
      setLoginSuccess("로그인 성공!");
      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setLoginSuccess("로그인 불가!");
      Swal.fire({
        icon: "error",
        title: "로그인 불가",
        text: "이름과 비밀번호를 다시 확인하세요!",
      });
    }
  };
  console.log(memberInfo);
  useEffect(() => {
    console.log(loginSuccess);
  }, [loginSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "loginName") {
      setLoginName(value);
    } else if (name === "loginPassword") {
      setLoginPassword(value);
    }
  };

  return (
    <>
      <SignUp onCreate={handleCreate} />
      {/* <div>
        <span>
          자식 컴포넌트에서 보낸 데이터 부모 컴포넌트로 받아온 배열:{" "}
          {JSON.stringify(memberInfo)}
        </span>
      </div> */}
      <div className="login-container__form login-container--signin">
        <form className="form" id="form2" onSubmit={handleSubmit}>
          <h2 className="form__title">Login</h2>
          <input
            className="input"
            name="loginName"
            onChange={handleChange}
            value={loginName}
            placeholder="아이디"
          />
          <input
            type="password"
            className="input"
            name="loginPassword"
            onChange={handleChange}
            value={loginPassword}
            placeholder="비밀번호"
          />
          <button className="btn" type="submit" onSubmit={handleSubmit}>
            Login
          </button>
          {/* <span>로그인 성공 여부 : {loginSuccess}</span> */}
        </form>
      </div>
    </>
  );
};

export default LoginPage;
