import React, { Component } from "react";
import Information from "./Myinformation";
import MySchedule from "../Schdule/MySchedule";
import "../../CSS/mypage.css";
class MySystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      activeComponent: null,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  handleInformationClick = () => {
    this.setState({ activeComponent: "information" });
  };

  handleScheduleClick = () => {
    this.setState({ activeComponent: "schedule" });
  };

  renderActiveComponent() {
    const { activeComponent } = this.state;

    switch (activeComponent) {
      case "information":
        return <Information />;
      case "schedule":
        return <MySchedule />;
      default:
        return null;
    }
  }

  render() {
    const { dropdownOpen } = this.state;

    return (
      <>
        <div isOpen={dropdownOpen} toggle={this.toggle}>
          <div className="mypage-category">
            <div onClick={this.handleInformationClick}>내정보</div>
            <div onClick={this.handleScheduleClick}>과거 시간표</div>
          </div>
        </div>
        {this.renderActiveComponent()}
      </>
    );
  }
}

export default MySystem;
