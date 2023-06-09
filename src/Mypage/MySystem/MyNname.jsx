import React, { Component } from 'react';
import '../Mypage.css';
class MyNname extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nname: '홍길동'
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { name } = props;
    if (name) { 
      return {
        Nname: name
      };
    }
    return null;
  }

  render() {
    return (
      <h7>현재 이름: {this.state.Nname}</h7>
    );
  }
}

export default MyNname;