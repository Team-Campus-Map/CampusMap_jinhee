import React, { useState } from "react";
import CalendarComponent from "react-calendar";
import moment from "moment";
import "../CSS/calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header/Header";
import CalendarDetail from "./CalendarDetail";
import Footer from "../Footer/Footer";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && date.getMonth() !== new Date().getMonth()) {
      return "grayed-out";
    }
    return null;
  };

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const removeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  const handleAddData = () => {
    const eventData = {
      date: date.toDateString(), // 선택된 날짜 추가
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      details: document.getElementById("details").value,
    };

    addEvent(eventData);
    closeModal();
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
                icon={faTimes}
                size="lg"
              />
              <span>일정 입력하기</span>
              <div className="modal-input-content">
                <div className="modal-date">
                  {moment(date).format("YYYY년 MM월 DD일")}
                </div>
                <input
                  id="title"
                  type="text"
                  placeholder="일정 제목"
                  className="modal-input"
                />
                <textarea
                  id="description"
                  placeholder="일정 내용"
                  className="modal-input"
                  style={{ padding: "0.2rem 0.2rem" }}
                />
                <input
                  id="details"
                  type="text"
                  placeholder="세부 사항"
                  className="modal-input"
                />
                <button className="modal-input-submit" onClick={handleAddData}>
                  등록하기
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="calendar-Detail-Component-Group">
          <CalendarDetail
            detailheader="오늘의 일정"
            events={events}
            onRemoveEvent={removeEvent}
            selectedDate={date} // 선택된 날짜 전달
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
