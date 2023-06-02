import React from "react";
import { Link } from "react-router-dom";
import headerstyles from "./header.module.css";
const Header = () => {
  return (
    <>
      <Link to="/" className={headerstyles.link}>
        <div className={headerstyles.title}>Campus Map</div>
      </Link>
    </>
  );
};

export default Header;
