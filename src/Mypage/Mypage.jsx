import React, { useState } from "react";
import "../CSS/mypage.css";
import Schedule from "./Schdule/MySchedule";
import MySystem from "./MySystem/MySystem";
import MyNname from "./MySystem/MyNname";
import Myinformation from "./MySystem/Myinformation";
import Header from "../Header/Header";

const Mypage = (props) => {
  return (
    <>
      <div className="mypage-header">
        <Header />
        <div>
          <MySystem />
        </div>
      </div>
    </>
  );
};

export default Mypage;
