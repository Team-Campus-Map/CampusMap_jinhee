import React, { useEffect } from "react";
import mainstyle from "./mainheader.module.css";
const MainContainer = (props) => {
  const imgList = [
    { name: "이미지1", image: "main_img1.jpg" },
    { name: "이미지2", image: "main_img2.jpg" },
    { name: "이미지3", image: "main_img3.jpg" },
  ];
  return (
    <>
      <div className={mainstyle.cafeintro}></div>
      <div className={mainstyle.containerBoxText}>
        각 사진마다 컴포넌트로 문구 넣을거임
      </div>
      <div className={mainstyle.containerBox} data-aos="fade-up">
        <div className={mainstyle.container}>
          {imgList.map((list) => (
            <img
              src={`/img/${list.image}`}
              alt={list.name}
              width={400}
              height={400}
            />
          ))}
        </div>

        {/*<div className={mainstyle.containerBoxText}>
          각 사진마다 컴포넌트로 문구 넣을거임
        </div>
        <div className={mainstyle.containerBoxText}>
          각 사진마다 컴포넌트로 문구 넣을거임
        </div>
        <div className={mainstyle.containerBoxText}>
          각 사진마다 컴포넌트로 문구 넣을거임
        </div> */}
      </div>
    </>
  );
};

export default MainContainer;
