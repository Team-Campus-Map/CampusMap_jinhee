import React from "react";

const CalendarDetail = ({ detailheader, events, onRemoveEvent, selectedDate }) => {
  // 선택된 날짜에 해당하는 이벤트만 필터링
  const filteredEvents = events.filter(
    (event) =>
      new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="timetable-Detail-Container">
      <div className="timetable-Detail-Container-header">{detailheader}</div>
      {filteredEvents.map((event, index) => (
        <div key={index} className="event-item">
          <div className="event-title">일정 제목: {event.title}</div>
          <div className="event-description">일정 내용: {event.description}</div>
          <div className="event-details">세부 사항: {event.details}</div>
          <button
            className="remove-button"
            onClick={() => onRemoveEvent(index)}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default CalendarDetail;