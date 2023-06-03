import { useState } from "react";
import CalendarComponent from "react-calendar";
import moment from "moment";
import "../CSS/calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header/Header";
import CalendarModalInput from "./CalendarModalInput";
import CalendarDetail from "./CalendarDetail";
import Footer from "../Footer/Footer";
const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  // 월 이외의 날짜를 회색으로 표시하는 스타일
  const tileClassName = ({ date, view }) => {
    if (view === "month" && date.getMonth() !== new Date().getMonth()) {
      return "grayed-out";
    }
    return null;
  };

  return (
    <div className="calendar-header">
      <Header />
      <div className="calendar-body">
        <div className="calendar-container">
          <CalendarComponent
            onChange={handleDateChange}
            value={date}
            defaultValue={date}
            minDetail="year"
            tileClassName={tileClassName}
            formatDay={(locale, date) => moment(date).format("DD")}
          />
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <FontAwesomeIcon
                className="modal-close"
                onClick={closeModal}
                icon={faXmark}
                size="lg"
              />
              <span>일정 입력하기</span>
              <div className="modal-input-content">
                <div className="modal-date">
                  {" "}
                  {moment(date).format("YYYY년 MM월 DD일")}{" "}
                </div>
                <CalendarModalInput placeholder=" 일정 제목" />
                <textarea
                  placeholder=" 일정 내용"
                  className="modal-input-detail"
                />
                <CalendarModalInput placeholder=" 세부 사항" />
                <button className="modal-input-submit">등록하기</button>
              </div>
            </div>
          </div>
        )}
        <div className="calendar-Detail-Component-Group">
          <CalendarDetail detailheader="오늘의 일정" />
          <CalendarDetail detailheader="이번주 일정" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
