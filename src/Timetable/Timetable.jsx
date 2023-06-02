import { useState } from "react";
import Calendar from "react-calendar";
import "../CSS/timetable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header/Header";
import TimetableModalInput from "./TimetableModalInput";
import TimetableDetail from "./TimetableDetail";
import Footer from "../Footer/Footer";
const Timetable = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="timetable-header">
      <Header />
      <div className="timetable-body">
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={date} />
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
                <div className="modal-date">{date.toDateString()}</div>
                <TimetableModalInput placeholder=" 일정 제목" />
                <TimetableModalInput
                  placeholder=" 일정 내용"
                  className="modal-input-detail"
                />
                <button className="modal-input-submit">등록하기</button>
              </div>
            </div>
          </div>
        )}
        <div className="timetable-Detail-Component-Group">
          <TimetableDetail detailheader="오늘의 일정" />
          <TimetableDetail detailheader="이번주 일정" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timetable;
