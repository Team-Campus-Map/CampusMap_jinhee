import React from "react";
import { Link } from "react-router-dom";
import mainstyle from "./mainheader.module.css";

const MainHeaderBtn = ({ text }) => {
  const handleButtonClick = () => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>";
    });
  };
  const slicedText = text
    .split("")
    .map((char, index) => <span key={index}>{char}</span>);

  return (
    <>
      <Link to="/Login" className={mainstyle.link}>
        <div
          className={`${mainstyle.button} ${mainstyle.fast} ${mainstyle.white}`}
          onClick={handleButtonClick}
        >
          <div>{slicedText}</div>
        </div>
      </Link>
    </>
  );
};

export default MainHeaderBtn;
