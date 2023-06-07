import React from "react";
import Header from "../Header/Header";
// import Container from "./Container";
import Container from "./Container";
import Login from "./Login/Login";
const AuthPage = (props) => {
  return (
    <div className="loginBody">
      <Header />

      <Container />
    </div>
  );
};

export default AuthPage;
