import React, { useState } from "react";
import "../CSS/timetable.css";
import Header from "../Header/Header";
import TimetableInput from "./TimetableInput";
import Footer from "../Footer/Footer";

function Timetable(props) {
  const inputLabel = {
    lable1: {
      htmlFor: "dayOfWeek",
      labelText: "해당 수업의 요일을 선택하세요",
    },
    lable2: {
      htmlFor: "startTeaching",
      labelText: "수업의 시작 교시를 선택하세요",
    },
    lable3: {
      htmlFor: "continuousTeaching",
      labelText: "수업의 연속 교시를 선택하세요",
    },
  };
  const inputOption = {
    option1: [
      {
        value: "",
        name: "요일 선택",
      },
      {
        value: "Monday",
        name: "Monday",
      },
      {
        value: "Tuesday",
        name: "Tuesday",
      },
      {
        value: "Wednesday",
        name: "Wednesday",
      },
      {
        value: "Thursday",
        name: "Thursday",
      },
      {
        value: "Friday",
        name: "Friday",
      },
    ],
    option2: [
      {
        value: "1",
        name: "1교시 (9 am)",
      },
      {
        value: "2",
        name: "2교시",
      },
      {
        value: "3",
        name: "3교시",
      },
      {
        value: "4",
        name: "4교시 (12 pm)",
      },
      {
        value: "5",
        name: "5교시",
      },
      {
        value: "6",
        name: "6교시",
      },
      {
        value: "7",
        name: "7교시",
      },
      {
        value: "8",
        name: "8교시",
      },
      {
        value: "9",
        name: "9교시",
      },
    ],
    option3: [
      {
        value: "0",
        name: "시간",
      },
      {
        value: "1",
        name: "1시간",
      },
      {
        value: "2",
        name: "2시간",
      },
      {
        value: "3",
        name: "3시간",
      },
      {
        value: "4",
        name: "4시간",
      },
    ],
  };
  const [inputClassName, setInputClassName] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [continuousTeaching, setContinuousTeaching] = useState(0);
  const [startTeaching, setStartTeaching] = useState(0);

  const setRedBackground = () => {
    const table = document.getElementsByTagName("table")[0];
    const rows = table.getElementsByTagName("tr");

    const startRowIndex = 1;
    const startCellIndex = startTeaching;

    for (let i = startRowIndex; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");

      if (rows[i].cells[0].innerHTML === dayOfWeek) {
        for (
          let k = startCellIndex;
          k < startCellIndex + continuousTeaching;
          k++
        ) {
          cells[k].classList.add("red-background");
          cells[k].innerHTML = inputClassName;
          cells[k].colSpan = continuousTeaching;
          break;
        }
        // //td삭제
        // for (let j = startCellIndex + 1; j < continuousTeaching; j++) {
        //   cells[8 - j].classList.add("remove");
        //   cells[8 - j].remove();
        // }
      }
    }
  };

  const handleInputClassName = (event) => {
    setInputClassName(event.target.value.toString());
  };

  const handleDayOfWeekChange = (event) => {
    setDayOfWeek(event.target.value);
  };

  const handleContinuousTeachingChange = (event) => {
    setContinuousTeaching(parseInt(event.target.value));
  };

  const handleStartTeachingChange = (event) => {
    setStartTeaching(parseInt(event.target.value));
  };

  return (
    <div className="timetable-header">
      <Header />
      <div className="timetable-body">
        <div className="timetable-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th> 1교시 </th>
                <th> 2교시 </th>
                <th> 3교시 </th>
                <th> 4교시 </th>
                <th> 5교시 </th>
                <th> 6교시 </th>
                <th> 7교시 </th>
                <th> 8교시 </th>
                <th> 9교시 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="dddd"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Friday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="timetable-select">
          <h3>시간표 입력</h3>
          <input
            type="text"
            value={inputClassName}
            id="inputClassName"
            placeholder="수업명을 입력하세요"
            onChange={handleInputClassName}
          />
          <TimetableInput {...inputLabel.lable1} />
          <select
            id="dayOfWeek"
            value={dayOfWeek}
            onChange={handleDayOfWeekChange}
          >
            {inputOption.option1.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <TimetableInput {...inputLabel.lable2} />
          <select
            id="startTeaching"
            value={startTeaching}
            onChange={handleStartTeachingChange}
          >
            {inputOption.option2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <TimetableInput {...inputLabel.lable3} />
          <select
            id="continuousTeaching"
            value={continuousTeaching}
            onChange={handleContinuousTeachingChange}
          >
            {inputOption.option3.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button onClick={setRedBackground}>입력하기</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Timetable;
