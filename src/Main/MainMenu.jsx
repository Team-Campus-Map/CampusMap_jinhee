import React from "react";
const MainMenu = ({ href, text }) => {
  return (
    <>
      <a href={href}>{text}</a>
    </>
  );
};

export default MainMenu;
