import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MapDetailButton = ({ buttonName }) => {
  const [showDetailHeader, setShowDetailHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClick = (e) => {
    setShowDetailHeader(!showDetailHeader);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const detailheader = [
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
  const detailbody = [
    `B2층 | 식당ㅤㅤㅤㅤ ㅤㅤㅤ
    B1층 | 열람실ㅤㅤㅤㅤ ㅤㅤ
    1층 | ATM (신한 농협 국민)
    6층 | 복사점 / 편의점(CU)`,
    `B1층 | 셔틀버스 표ㅤㅤㅤㅤ 1층 | 서점 (전공·교양) / ㅤㅤㅤㅤ안경점 / 우체국 / ㅤㅤㅤㅤ보건실/ 여성회복실 /  ㅤㅤㅤATM`,
    `B1층 | 밀겨울식당 / 복사점 ㅤㅤㅤㅤ/ 통학버스 표ㅤㅤㅤ     
    1층 | ATM (신한 국민)`,
    `1층,2층 | 교내 식당`,
    `1층,2층 | 교내 식당`,``,
    `3층 | 편의점(CU)`,`1층 | 복사점 / 편의점(CU) / ATM (신한)`,``,`대강당 | 소강당`,`1층 | 복사점ㅤㅤㅤㅤㅤㅤㅤ 5층 | 매점 ㅤㅤㅤㅤㅤㅤㅤㅤ7층 | 도서관`

  ];

  console.log(`detailbody[0]${detailbody[0]}`);

  return (
    <>
      <div className="detail-button" onClick={handleClick}>
        {buttonName}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <FontAwesomeIcon
              className="modal-close"
              onClick={closeModal}
              icon={faTimes}
              size="lg"
            />
            {
              <div className="detail-button-modal">
                <div className="detail-button-modal-header">
                  <table>
                    {detailheader.map((header, index) => (
                      <tr key={index}>
                        <div className="modal-header">
                          <div>{header}</div>
                        </div>
                        <td>
                          <div className="detail-button-modal-body">
                            <div key={index} className="modal-body">
                              <div>{detailbody[index]}</div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default MapDetailButton;
