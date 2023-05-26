import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainHeaderBtn from "./MainHeaderBtn";
import mainstyle from "./mainheader.module.css";
import MainContainer from "./MainContainer";
import LuckydayInfoText from "./LuckydayInfoText";
import Footer from "../Footer/Footer";
const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const text = "Login";
  return (
    <>
      <div className={mainstyle.header}>
        <div className={mainstyle.headerGroup}>
          <div className={mainstyle.Luckyday}>LuckyDay</div>
          <MainHeaderBtn text={text} />
        </div>
        <div className={mainstyle.scrolldown}>
          <span>SCROLL DOWN</span>
          <div className={mainstyle.box_scroll}>
            <div className={mainstyle.iconScroll}></div>
          </div>
        </div>
        <LuckydayInfoText />
        {/*MainHeaderBtn의 className={`${mainstyle.button} ${mainstyle.fast} ${mainstyle.white} */}
      </div>

      <MainContainer />
      <Footer />
      {/* <div style={{ height: "900px" }}></div>
      <div className={mainstyle.boxStyle} data-aos="fade-up">
        <p>AOS 테스트3</p>
      </div>
      <div style={{ height: "500px" }}></div> */}
    </>
  );
};

export default Main;
