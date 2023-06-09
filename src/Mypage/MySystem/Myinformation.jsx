import React, { Component } from 'react';
import Myname from './MyNname';
import '../Mypage.css';
import Swal from 'sweetalert2';
import MySystem from './MySystem';

class Myinformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '홍길동',
      email: 'hong@naver.com',
      inputtext: '',
      password: "",
      repassword: ""
    }
    this.buttonOn = false;
  }

  change = (e) => {
    var val = e.target.value;
    this.setState({
      inputtext: val,
    })
  }
  
  handleUpdate = (type) => {
    const { inputtext } = this.state;
    if (type === 'name') {
      this.setState({ name: inputtext },
        () => this.saveAlert('수정','center'));
    } else if (type === 'email') {
      this.setState({ email: inputtext }, 
        () => this.saveAlert('수정','center'));
    }
  }

  saveAlert = (flag, positionflag) => {
    Swal.fire({
      position: positionflag,
      icon: 'success',
      title: flag+'되었습니다.',
      showCancelButton: false,
      timer: 1500
    })
  }


  PasswordChange = (e) => {
    const value = e.target.value;
    this.setState({ password: value });
    console.log(value);
  }

  RepasswordChange = (e) => {
    const value = e.target.value;
    this.setState({ repassword: value });
    console.log(value);
  }

  handleUpdatepw = () => {
    const { password, repassword } = this.state;
    if (password === repassword) {
      this.buttonOn = true;
      this.saveAlertpw('수정 되었습니다', 'center', 'success');
    } else {
      this.buttonOn = true;
      this.saveAlertpw('비밀번호가 맞지 않습니다', 'center' , 'error');
    }
  }

  saveAlertpw = (flag, positionflag , icon_1) => {
    if (this.buttonOn) { 
      Swal.fire({
        position: positionflag,
        icon: icon_1,
        title: flag,
        showCancelButton: false,
        timer: 1500
      });
    }
  }

  render() {
    const inputStyle = {
      marginRight: '10px'
    };
    const { password, repassword } = this.state;
    return (
      
      <div className='Information-container'>
        <tr>사용자 이름 변경</tr>
        <input type='text' placeholder='사용자 이름' onChange={this.change} />
        <button className='Information-button' onClick={() => this.handleUpdate('name')} >
          수정</button>
        <div><Myname name={this.state.name} /></div>
        <tr>이메일 변경</tr>
        <input type='text' placeholder='이메일' onChange={this.change} />
        <button className='Information-button' onClick={() => this.handleUpdate('email')}>
          수정</button>
        <div><h7>현재 이메일: {this.state.email}</h7></div>
        <tr>비밀번호 변경</tr>
        <input type='password' value={password} onChange={this.PasswordChange} />
        <tr>비밀번호 확인</tr>
        <input type='password' value={repassword} onChange={this.RepasswordChange} />
        <button className='Information-button' onClick={this.handleUpdatepw}>수정</button>
      </div>
    )
  }
}

export default Myinformation;
