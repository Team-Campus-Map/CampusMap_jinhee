import React from "react";
import CardComponent from "./CardComponent";

import "../CSS/card.css";
const Card = () => {
  const cardComponentText = {
    card1: {
      cardtextheader: "Campus Map",
      cardtextbody: (
        <>
          학우 분들의
          <br />
          학교 생활 적응을 위한 <br />
          캠퍼스 지도!
          <br /> <br /> 학교 내의 다양한 시설과 위치를
          <br />
          확인해보세요!
        </>
      ),
      cardimage: "card1.jpg",
      cardlink: "Campus Map 바로가기",
      cardhref: "/Map",
    },
    card2: {
      cardtextheader: "Calendar",
      cardtextbody: (
        <>
          체계적인 생활이 필요하거나
          <br /> 앞으로 무엇을 해야하는지 <br />한 눈에 파악하고싶을 때,
          <br /> <br /> 해야 할 일을 정리하고 <br />
          계획을 정리해보세요!
        </>
      ),
      cardimage: "card2.jpg",
      cardlink: "Calendar 바로가기",
    },
    card3: {
      cardtextheader: "Timetable",
      cardtextbody: (
        <>
          강의 시간표 작성, 수업 일정 등 편리한 학업 관리가 가능해요!
          <br />
          <br />
          수업을 등록하러 가보세요!
        </>
      ),
      cardimage: "card3.jpg",
      cardlink: "Timetable 바로가기",
      cardhref: "/Timetable",
    },
  };
  return (
    <div className="cardcomponent">
      <div className="wrapper">
        <CardComponent {...cardComponentText.card1} cardclass="card1" />
        <CardComponent {...cardComponentText.card2} cardclass="card2" />
        <CardComponent {...cardComponentText.card3} cardclass="card3" />
      </div>
    </div>
  );
};

export default Card;
