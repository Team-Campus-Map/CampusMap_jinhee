import React, { Component } from "react";
import "../../CSS/mypage.css";

class MySchedule1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      place: "",
      time: "",
    };
    this.Osystem = this.Osystem.bind(this);
    this.Bigdata = this.Bigdata.bind(this);
    this.chapel = this.chapel.bind(this);
    this.CExploration = this.CExploration.bind(this);
    this.BibleHuman = this.BibleHuman.bind(this);
    this.Engineering = this.Engineering.bind(this);
    this.Iot = this.Iot.bind(this);
  }

  Osystem() {
    this.setState({
      name: "과목: 운영체제론",
      place: "위치: 본부동 502호",
      time: "시간: 09:00 ~ 12:00",
    });
  }
  Bigdata() {
    this.setState({
      name: "과목: 빅데이터",
      place: "위치: 본부동 502호",
      time: "시간: 10:00 ~ 12:00",
    });
  }
  CExploration() {
    this.setState({
      name: "과목: 기독교 탐사",
      place: "위치: 목양관 B101호",
      time: "시간: 10:00 ~ 11:00",
    });
  }
  chapel() {
    this.setState({
      name: "과목: 채플",
      place: "위치: 대강당",
      time: "시간: 11:00 ~ 12:00",
    });
  }
  BibleHuman() {
    this.setState({
      name: "과목: 성경과 인간이해",
      place: "위치: 지혜관 302호",
      time: "시간: 01:00 ~ 02:00",
    });
  }
  Engineering() {
    this.setState({
      name: "과목: 공학기초설계",
      place: "위치: 본부동 501호",
      time: "시간: 01:00 ~ 03:00",
    });
  }
  Iot() {
    this.setState({
      name: "과목: Iot",
      place: "위치: 본부동 518호",
      time: "시간: 01:00 ~ 03:00",
    });
  }

  render() {
    return (
      <>
        <table
          class="table_ty1"
          width={600}
          height={430}
          style={{ float: "left" }}
        >
          <tr>
            <th></th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
          <tr>
            <th>9</th>
            <td rowspan={"3"} className="name_box1" onClick={this.Osystem}>
              운영체제론
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>10</th>
            <td></td>
            <td rowspan={"2"} className="name_box2" onClick={this.Bigdata}>
              빅데이터
            </td>
            <td className="name_box3" onClick={this.CExploration}>
              기독교 탐사
            </td>
            <td></td>
          </tr>
          <tr>
            <th>11</th>
            <td></td>
            <td className="name_box5" onClick={this.chapel}>
              채플
            </td>
            <td></td>
          </tr>
          <tr>
            <th>12</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>1</th>
            <td className="name_box7" onClick={this.BibleHuman}>
              성경과 인간이해
            </td>
            <td></td>
            <td rowSpan={"2"} className="name_box9" onClick={this.Engineering}>
              공학기초설계
            </td>
            <td rowSpan={"2"} className="name_box10" onClick={this.Iot}>
              Iot
            </td>
            <td></td>
          </tr>
          <tr>
            <th>2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>3</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>4</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>5</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table className="table_ty2" width={150}>
          <tr>
            <td>{this.state.name}</td>
          </tr>
          <tr>
            <td>{this.state.place}</td>
          </tr>
          <tr>
            <td>{this.state.time}</td>
          </tr>
        </table>
      </>
    );
  }
}
export default MySchedule1;
