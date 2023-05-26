import React from "react";
import footerStyle from "./footer.module.css";
import FooterContent from "./FooterContent";
import FooterContentGoLink from "./FooterContentGoLink";
const Footer = (props) => {
  return (
    <div className={footerStyle.footerBody}>
      <FooterContent />
      <FooterContentGoLink />
    </div>
  );
};

export default Footer;
