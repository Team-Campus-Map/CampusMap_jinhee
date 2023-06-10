import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/about.css";
import Header from "../Header/Header";

export default function CampusIntrodc() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="about">
      <Header />
      <div className="shooltage">
        <Slider {...settings}>
          <div>
            <h3>
              <h4 className="shooltage1">
                <img src="/img/about1.png" height={370} />
                <p>
                  대학교에 재학 중이신 대부분의 학우 분들이 코로나 학번 학우들과
                  신입생 학우들에게 학교 생활 적응을 위한 캠퍼스 지도입니다.
                  <br />
                  본인의 실시간 위치 정보와 건물 별 위치를 확인하고, 건물 별
                  편의시설을 확인해보세요.
                </p>
              </h4>
            </h3>
          </div>
          <div>
            <h3>
              <h4 className="shooltage1">
                <img src="/img/about2.png" height={370} />
                <p>
                  일정 관리뿐만 아니라 할 일 기능을 편리하게 입력할 수 있습니다.
                  <br />
                  약속, 팀 활동, 스터디 등 개인적인 일정을 관리해보세요.
                  <br />한 일은 완료를 하거나 삭제할 수 있습니다.
                </p>
              </h4>
            </h3>
          </div>
          <div>
            <h3>
              <h4 className="shooltage1">
                <img src="/img/bu3.jpg" height={300} />
                <p>
                  시간표 작성, 수업 일정 등 편리한 학업 관리가 가능합니다.
                  <br />
                  편리하게 시간표를 작성하고, 오늘 강의시간을 확인해보세요!
                </p>
              </h4>
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
