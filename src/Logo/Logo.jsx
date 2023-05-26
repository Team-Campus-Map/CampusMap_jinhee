import React from "react";
import { Link } from "react-router-dom";
import "../CSS/main.css";
const Logo = () => {
  return (
    <>
      <Link to="/" className="logo-link">
        <div className="logo">CAMPUS MAP</div>
      </Link>
    </>
  );
};

export default Logo;
