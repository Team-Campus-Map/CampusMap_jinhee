import React from "react";
import footerStyle from "./footer.module.css";
import FooterContentGoLink from "./FooterContentGoLink";
const FooterContent = (props) => {
  return (
    <>
      <footer>
        <div className={footerStyle.footer}>
          <h3>Connect</h3>
          <ul className={footerStyle.socials}>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className={footerStyle["footer-copyright"]}>
            <p>Copyright &copy;2023 LD all rights reserved. </p>
          </div>
        </div>
      </footer>
      <div className={footerStyle.column + " " + footerStyle.link}>
        <h3>Links</h3>
        <FooterContentGoLink link="Team" />
        <FooterContentGoLink link="Menu" />
        <FooterContentGoLink link="Seat" />
        <FooterContentGoLink link="QnA" />
      </div>
    </>
  );
};

export default FooterContent;
