import React, { Component } from 'react';

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
      <h3>{this.state.Nname}</h3>
    );
  }
}

export default MyNname;