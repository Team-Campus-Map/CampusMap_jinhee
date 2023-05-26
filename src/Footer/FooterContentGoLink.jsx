import React from "react";
import footerStyle from "./footer.module.css";
const FooterContentGoLink = (props) => {
  return (
    <>
      <ul className={footerStyle.ul}>
        <li className={footerStyle.li}>
          <a href="#home">{props.link}</a>
        </li>
      </ul>
    </>
  );
};

export default FooterContentGoLink;
