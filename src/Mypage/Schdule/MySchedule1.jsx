import React, { Component } from 'react';
import '../Mypage.css';

class MySchedule1 extends Component {
  constructor(props) {
    super(props);
    this.state={
      name : '',
      place : '',
      time : '',

    }

    this.DiscreteMath =this.DiscreteMath.bind(this);
    this.EngineeringMath = this.EngineeringMath.bind(this);
    this.Christian = this.Christian.bind(this);
    this.English = this.English.bind(this);
    this.chapel = this.chapel.bind(this);
    this.lifephilosophy = this.lifephilosophy.bind(this);
    this.Java = this.Java.bind(this);
    this.c = this.c.bind(this);
    this.Algorithm = this.Algorithm.bind(this);
  }
  DiscreteMath(){
    this.setState({
      name : '과목: 이산수학',
      place : '위치: 본부동 200호',
      time : '시간: 09:00 ~ 10:00'
    })
   }
   EngineeringMath(){
    this.setState({
      name : '과목: 공학수학',
      place : '위치: 본부동 201호',
      time : '시간: 09:00 ~ 11:00'
    })
   }
   Christian(){
    this.setState({
      name : '과목: 기독교',
      place : '위치: 진리관 503호',
      time : '시간: 11:00 ~ 12:00'
    })
   }
   English(){
    this.setState({
      name : '과목: 영어',
      place : '위치: 지혜관 401호',
      time : '시간: 09:00 ~ 11:00'
    })
   }
   chapel(){
    this.setState({
      name : '과목: 채플',
      place : '위치: 대강당',
      time : '시간: 11:00 ~ 12:00'
    })
   }
   lifephilosophy(){
    this.setState({
      name : '과목: 삶과 철학',
      place : '위치: 지혜관 402호',
      time : '시간: 12:00 ~ 01:00'
    })
   }
   Java(){
    this.setState({
      name : '과목: 자바스크립트',
      place : '위치: 본부동 517호',
      time : '시간: 01:00 ~ 04:00'
    })
   }
   c(){
    this.setState({
      name : '과목: c++',
      place : '위치: 본부동 518호',
      time : '시간: 01:00 ~ 02:00',
    })
   }
   Algorithm(){
    this.setState({
      name : '과목: 알고리즘',
      place : '위치: 진리관 503호',
      time : '시간: 01:00 ~ 03:00',
    })
   }
  render() {
    return (
      <>
      <table class='table_ty1' width={600} height={600} style={{float : 'left'}}>
        
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
          <td></td>
          <td rowspan = {'2'} className = 'name_box1' onClick = {this.DiscreteMath} >
             이산 수학</td>
          <td rowspan = {'3'} className = 'name_box2' onClick = {this.EngineeringMath} >공학수학</td>
          <td rowspan = {'2'} className = 'name_box3' onClick = {this.English} >영어</td>
          <td></td>
        </tr>
        <tr>
          <th>10</th>
          <td></td>
        </tr>
        <tr>
          <th>11</th>
          <td className = 'name_box4' onClick = {this.Christian}>기독교</td>
          <td></td>
          <td className = 'name_box5' onClick = {this.chapel}>채플</td>
          <td></td>

        </tr>
        <tr>
          <th>12</th>
          <td></td>
          <td className = 'name_box6' onClick={this.lifephilosophy}>삶과 철학</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>1</th>
          <td rowSpan = {'3'} className= 'name_box7' onClick = {this.Java}>자바스크립트</td>
          <td></td>
          <td rowSpan = {'2'} className = 'name_box9' onClick = {this.c}>c++</td>
          <td rowSpan = {'2'} className = 'name_box10' onClick = {this.Algorithm}>알고리즘</td>
          <td></td>
        </tr>
        <tr>
          <th>2</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>3</th>
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
        <table className = 'table_ty2' width={150}>
        <tr><td>{this.state.name}</td></tr>
        <tr><td>{this.state.place}</td></tr>
        <tr><td>{this.state.time}</td></tr>
        </table>
      </>
    )
 
  }
}
export default MySchedule1;