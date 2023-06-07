import React, { useState } from "react";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
const CalendarDetail = ({
  detailheader,
  events,
  onRemoveEvent,
  onCheckBox,
  selectedDate,
}) => {
  // 선택된 날짜에 해당하는 이벤트만 필터링
  const filteredEvents = events.filter(
    (event) =>
      new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  const [date, setDate] = useState(new Date());
  const tileClassName = ({ date, view }) => {
    if (view === "month" && date.getMonth() !== new Date().getMonth()) {
      return "grayed-out";
    }
    return null;
  };
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };
  return (
    <div className="timetable-Detail-Container">
      <div className="timetable-Detail-Container-header">{detailheader}</div>

      <div className="timetable-Detail-Container-body">
        <div className="timetable-Detail-Container-body-date">
          {moment(selectedDate).format("YYYY년 MM월 DD일")}
        </div>
        <br />
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className={`event-item ${checkedItems[index] ? "checked" : ""}`}
          >
            <div className="event-title">
              <input
                className="event-item-checkbox"
                type="checkbox"
                onClick={() => handleCheckboxChange(index)}
              />
              <div>{event.title}</div>
            </div>
            <div className="event-item-description">
              <div className="event-description">
                일정 내용 : {event.description}
              </div>
              <div className="event-details">세부 사항 : {event.details}</div>
            </div>
            <button
              className="remove-button"
              onClick={() => onRemoveEvent(index)}
            >
              <FontAwesomeIcon icon={faTrashCan} olor="#BDBDBD" />
              &nbsp;삭제
            </button>
            <div
              style={{ borderBottom: "1px solid gray", marginTop: "5rem" }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDetail;
