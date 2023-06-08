import React from "react";

const TimetableInput = ({ htmlFor, labelText }) => {
  //"""dayOfWeek"해당 수업의 요일을 선택하세요
  return (
    <>
      <br />
      <label htmlFor={htmlFor}>{labelText}</label>
    </>
  );
};

export default TimetableInput;
