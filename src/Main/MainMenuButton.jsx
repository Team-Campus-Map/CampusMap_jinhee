import React from "react";
import MainMenu from "./MainMenu";

const MainMenuButton = () => {
  const linkProps = {
    about: {
      href: "/about",
      text: "About",
    },
    login: {
      href: "/login",
      text: "Login",
    },
    signup: {
      href: "/signup",
      text: "Sign Up",
    },
  };
  const toggleMenu = () => {
    document.body.classList.toggle("open");
  };
  return (
    <>
      <div className="main-menu-button" onClick={toggleMenu}>
        <svg
          className="menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 72 72"
        >
          <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
        </svg>
      </div>
      <div className="menu-background"></div>
      <div className="menuGroup">
        <MainMenu href={linkProps.about.href} text={linkProps.about.text} />
        <MainMenu href={linkProps.login.href} text={linkProps.login.text} />
      </div>
    </>
  );
};

export default MainMenuButton;
