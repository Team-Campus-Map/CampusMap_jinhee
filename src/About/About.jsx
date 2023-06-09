import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";
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
    <>
      <Header />
      <div className="shooltage">
        <Slider {...settings}>
          <div>
            <h3>
              백석대학교 역사
              <h4 className="shooltage1">
                <img src="/img/banner1.jpg" height={300} />
                백석대학교는 1993년 12월 17일, 학교법인 백산학원의 장종현에
                의하여 기독신학교로 설립되었다. 이듬해 3월 1일 개교하고, 12월
                2일에 대학으로 개편되며 기독신학대학으로 교명을 변경하였다.
                1995년, 기독대학교로 교명을 변경하고, 1996년 천안대학교로 다시
                교명을 변경하였다.
              </h4>
            </h3>
          </div>
          <div>
            <h3>
              백석학원의 설립 취지<tr></tr>
              <h4 className="shooltage1">
                <img src="/img/bu2.jpg" height={300} />
                백석학원의 설립, 백석학원의 존재 이유는 이 땅에 대학이 없어서가
                아닙니다. 세상의 지식을 가르치는 교육은 다른 대학에서도 얼마든지
                잘 할 수 있습니다. 만일 우리 대학이 다른 대학과 동일한 교육을
                한다면 세상의 수많은 대학에 또 하나의 대학이 더해진 것에
                불과합니다. 교육은 사람을 ‘사람다운 사람’으로 새롭게 바꾸어 가는
                일입니다. 도덕교육, 윤리교육만으로는 사람이 ‘사람다운 사람’으로
                변화될 수 없습니다. 사람을 변화시키고 영적 생명을 살리는 교육은
                오직 하나님의 말씀에 의해서만 가능합니다.
              </h4>
            </h3>
          </div>
          <div>
            <h3>
              {" "}
              총장인사말<tr></tr>
              <h4 className="shooltage1">
                <img src="/img/bu3.jpg" height={300} />
                지난 40여년 동안 백석대학은 한국대학 역사가 주목할 만한 놀라운
                성장을 거듭해왔습니다. 일찍부터 ‘젊은 대학, 뜨는 대학’ 으로
                주목을 받았으며, 이제는 그 규모와 영향력에서 국내 뿐 아니라
                세계적으로도 손에 꼽는 기독교 대학 명문으로 인정받고 있습니다.
                무엇보다 실력과 인격을 겸비한 교수진, 최신식 교육설비와 넓고
                쾌적한 환경은 백석대학교의 뺄 수 없는 자랑입니다. 모든
                교수님들이 학생을 존중하고 사랑하며 섬기는 학교, 또한 학생들이
                교수님과의 인격적 관계 속에서 단지 지식뿐 아니라 사랑과 삶을
                배우는 행복한 학교, 이것이 백석대학교가 자랑하는 두드러진
                특징입니다.
              </h4>
            </h3>
          </div>
        </Slider>
      </div>
    </>
  );
}
