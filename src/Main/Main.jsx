import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import MainMenuButton from "./MainMenuButton";
import Scroll from "./Scroll";
import Card from "./Card";
import Footer from "../Footer/Footer";
import "../CSS/main.css";

const Main = (props) => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && isHeaderVisible) {
        setHeaderVisible(false);
      } else if (scrollTop === 0 && !isHeaderVisible) {
        setHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderVisible]);
  return (
    <>
      <div
        className={`headerGroup ${isHeaderVisible ? "fade-in" : "fade-out"}`}
      >
        <div className="header">
          <Header />
          <MainMenuButton />
        </div>
      </div>
      <Scroll />
      <Card />
      <Footer />
    </>
  );
};
export default Main;
