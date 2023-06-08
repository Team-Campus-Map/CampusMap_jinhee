import React from "react";
import MainMenu from "../Main/MainMenu";
import "../CSS/main.css";
const FooterContent = (props) => {
  const footerlink = {
    about: {
      href: "/about",
      text: "About",
    },
    campusMap: {
      href: "/Map",
      text: "Campus Map",
    },
    calendar: {
      href: "/Calendar",
      text: "Calendar",
    },
    timetable: {
      href: "/Timetable",
      text: "Timetable",
    },
  };
  return (
    <>
      <footer>
        <div className="footer">
          <h3>Connect</h3>
          <a
            className="socials"
            href="https://github.com/Team-Campus-Map/CampusMap.git"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </footer>
      <div className="column">
        <h3>More</h3>
        <div className="footer-link">
          <MainMenu href={footerlink.about.href} text={footerlink.about.text} />
          {"·"}
          <MainMenu
            href={footerlink.campusMap.href}
            text={footerlink.campusMap.text}
          />
          {"·"}
          <MainMenu
            href={footerlink.calendar.href}
            text={footerlink.calendar.text}
          />
          {"·"}
          <MainMenu
            href={footerlink.timetable.href}
            text={footerlink.timetable.text}
          />
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright &copy;2023 CampusMap all rights reserved. </p>
      </div>
    </>
  );
};

export default FooterContent;
