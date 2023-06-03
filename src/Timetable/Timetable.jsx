import React, { useState } from "react";
import "../CSS/timetable.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Timetable() {
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [continuousTeaching, setContinuousTeaching] = useState(0);
  const [startTeaching, setStartTeaching] = useState(0);

  const setRedBackground = () => {
    const table = document.getElementsByTagName("table")[0];
    const rows = table.getElementsByTagName("tr");

    const startRowIndex = 1; // Skip header row
    const startCellIndex = startTeaching;

    for (let i = startRowIndex; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");

      // Reset background color for all cells in the row
      for (let j = 1; j < cells.length; j++) {
        cells[j].classList.remove("red-background");
      }

      if (rows[i].cells[0].innerHTML === dayOfWeek) {
        for (
          let k = startCellIndex + 1;
          k <= startCellIndex + continuousTeaching;
          k++
        ) {
          cells[k].classList.add("red-background");
        }
      }
    }
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
              </tr>
              <tr>
                <td>Saturday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* Repeat rows for other days of the week */}
            </tbody>
          </table>
        </div>
        <div className="timetable-select">
          <h3>시간표 입력</h3>
          <input type="text" id="inputtext" placeholder="수업명을 입력하세요" />
          <br />
          <label htmlFor="dayOfWeek">해당 수업의 요일을 선택하세요</label>
          <select
            id="dayOfWeek"
            value={dayOfWeek}
            onChange={handleDayOfWeekChange}
          >
            <option value="">요일 선택</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
          <br />
          <label htmlFor="startTeaching">수업의 시작 교시를 선택하세요</label>
          <select
            id="startTeaching"
            value={startTeaching}
            onChange={handleStartTeachingChange}
          >
            <option value="1">1교시</option>
            <option value="2">2교시</option>
            <option value="3">3교시</option>
            <option value="4">4교시</option>
            <option value="5">5교시</option>
            <option value="6">6교시</option>
            <option value="7">7교시</option>
          </select>
          <br />
          <label htmlFor="continuousTeaching">
            수업의 연속 교시를 선택하세요
          </label>
          <select
            id="continuousTeaching"
            value={continuousTeaching}
            onChange={handleContinuousTeachingChange}
          >
            <option value="0">시간</option>
            <option value="1">1시간</option>
            <option value="2">2시간</option>
            <option value="3">3시간</option>
            <option value="4">4시간</option>
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
