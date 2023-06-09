import React, { useState } from "react";
import "./Mypage.css";
import Schedule from "./Schdule/MySchedul";
import MySystem from "./MySystem/MySystem";
// import 'bootstrap/dist/css/bootstrap.css'

const Mypage = (props) => {
  return (
    <>
      <div className="headerGroup">
        <div style={{ textAlign: "right" }}>
          <MySystem />
        </div>
      </div>
      <Schedule />
    </>
  );
};

export default Mypage;
