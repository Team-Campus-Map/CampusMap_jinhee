import React from "react";
const FooterContentGoLink = (props) => {
  return (
    <>
      <ul className="ul">
        <li className="li">
          <a href="#home">{props.link}</a>
        </li>
      </ul>
    </>
  );
};

export default FooterContentGoLink;
