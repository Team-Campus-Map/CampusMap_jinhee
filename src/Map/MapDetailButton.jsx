import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MapDetailButton = ({ buttonName }) => {
  const [showDetailHeader, setShowDetailHeader] = useState(false);
  const [showBuildingHeader, setShowBuildingHeader] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    setShowDetailHeader(!showDetailHeader);
    setShowModal(true);
    setShowBuildingHeader(e.target.id === "buildingButton");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const Buildingdetailheader = [
    "본부동",
    "진리관",
    "복지동",
    "교수회관",
    "음악관",
    "지혜관",
    "체육관",
    "조형관",
    "승리관",
    "백석홀",
    "예술대학동",
    "외식관",
    "베네스다",
    "뷰리카페",
    "운동장",
    "목양관",
    "인성관",
    "백석생활관",
    "창조관",
    "은혜관",
    "자유관",
    "학술정보관",
  ];

  const facilitydetailheader = [
    "CU",
    "GS25",
    "복사실",
    "은행",
    "우체국",
    "ATM (신한)",
    "ATM (국민)",
    "ATM (농협)",
    "보건실",
    "여성회복실",
    "서점",
    "학식",
  ];

  const Buildingdetailbody = [
    `B2층 | 식당ㅤㅤㅤㅤ ㅤㅤㅤ
    B1층 | 열람실ㅤㅤㅤㅤ ㅤㅤ
    1층 | ATM (신한 농협 국민)
    6층 | 복사점 · 편의점(CU)`,
    `B1층 | 셔틀버스 표ㅤㅤㅤㅤ 1층 | 서점 (전공·교양) · ㅤㅤㅤㅤ안경점 · 우체국 · ㅤㅤㅤㅤ보건실· 여성회복실 ·  ㅤㅤㅤATM`,
    `B1층 | 밀겨울식당 · 복사점 ㅤㅤㅤㅤ· 통학버스 표ㅤㅤㅤ     
    1층 | ATM (신한 국민)`,
    `1층,2층 | 교내 식당`,
    `1층,2층 | 교내 식당`,
    ``,
    `3층 | 편의점(CU)`,
    `1층 | 복사점 · 편의점(CU) · ATM (신한)`,
    ``,
    `대강당 | 소강당`,
    `1층 | 복사점ㅤㅤㅤㅤㅤㅤㅤ 5층 | 매점 ㅤㅤㅤㅤㅤㅤㅤㅤ7층 | 도서관`,
    ``,
    `뷰리카페`,
    `베네스다 · 조형관`,
    `축구장 · 풋살장 · 농구장`,
    ``,
    `1층 복사점`,
    `1층 | 프린트 · atm · 당구장 2층 | 편의점 · 카페 `,
    ``,
    `1층 | 이마트24 · 복사점`,
    `세븐일레븐`,
    `B1층 | 세븐일레븐ㅤㅤㅤㅤ 1층 | 독서실 · 무인카페 ㅤㅤ2층 | 컴퓨터실 ㅤㅤㅤㅤㅤㅤ3층 | 만화카페`,
  ];

  const facilitydetailbody = [
    `진리관 B1층 · 조형관 1층 · 지혜관 3층 · 본부동 6층 `,
    `백석생활관 2층`,
    `백석생활관 1층 · 조형관 1층 · 진리관 1층 · 본부동 3/6층 · 예술관 7층 · 은혜관 1층`,
    `진리관 1층(신한)`,
    `진리관 1층`,
    `조형관 · 본부동 · 생활관 · 복지동 · 진리관`,
    `본부동 · 복지동`,
    `본부동`,
    `진리관 B1층`,
    `진리관 1층 `,
    `진리관 1층`,
    `복지동 B1층 · 교수회관 1층 · 외식관 1층`,
  ];

  console.log(`Buildingdetailbody[0]${Buildingdetailbody[0]}`);

  return (
    <>
      <div className="detail-button" id="buildingButton" onClick={handleClick}>
        건물별로 보기
      </div>
      <div className="detail-button" id="facilityButton" onClick={handleClick}>
        편의시설별로 보기
      </div>
      {showModal && (
        <div className="mapModal">
          <div className="mapModal-content">
            <FontAwesomeIcon
              className="modal-close"
              onClick={closeModal}
              icon={faTimes}
              size="lg"
            />
            {
              <div className="detail-button-modal-header">
                <table>
                  {(showBuildingHeader
                    ? Buildingdetailheader
                    : facilitydetailheader
                  ).map((header, index) => (
                    <tr key={index}>
                      <div className="modal-header">
                        <div>{header}</div>
                      </div>
                      <td>
                        <div className="detail-button-modal-body">
                          <div key={index} className="modal-body">
                            <div>
                              {showBuildingHeader
                                ? Buildingdetailbody[index]
                                : facilitydetailbody[index]}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default MapDetailButton;
