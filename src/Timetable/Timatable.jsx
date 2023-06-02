import React, { useState } from "react";

const Timatable = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="calendar">
      <div className="header">Header</div>
      <div className="days">Days</div>
      <div className="body">Cells</div>
    </div>
  );
};

export default Timatable;
