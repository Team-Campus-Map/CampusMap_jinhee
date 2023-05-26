import React from "react";
import mainstyle from "./mainheader.module.css";
const LuckydayInfoText = () => {
  return (
    <>
      <div className={mainstyle.luckydayInfoTextGroup}>
        <div className={mainstyle.luckydayInfoText}>fortuna</div>
        <div className={mainstyle.luckydayInfoText_1}>: 행운</div>
        <div className={mainstyle.luckydayInfoText_2}>
          당신의 커피에 행운이 가득찬 완벽한 하루가 담기기를 바라며
        </div>
      </div>
    </>
  );
};

export default LuckydayInfoText;
