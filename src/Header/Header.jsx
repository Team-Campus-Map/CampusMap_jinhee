/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/header.css";
const Header = () => {
  return (
    <div className="headerBody">
      <Link to="/" className="headerlink">
        <div className="title">Campus Map</div>
      </Link>
    </div>
  );
};

export default Header;
