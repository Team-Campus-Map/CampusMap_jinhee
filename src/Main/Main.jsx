import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import MainMenuButton from "./MainMenuButton";
import "../CSS/main.css";
const Main = (props) => {
  return (
    <>
      <div className="headerGroup">
        <div className="header">
          <Logo />
          <MainMenuButton />
        </div>
      </div>
    </>
  );
};

export default Main;
