import React, { Component } from "react";
import styles from "./header_sensing.module.css";
class HeaderSensing extends Component {
  state = {
    languageInfo: [],
  };
  handleObject = (e) => {
    const { languageInfo } = this.props;
    const Info = languageInfo["0"];
    this.setState({ languageInfo: Info });
    //요기서 오류 : 값이 없으면 에러가 남.
  };
  //input의 값이 변하면 움직여야되는데 지금 해놓은것은 header_sensing 이 움직여야 작동됨
  //그래서
  render() {
    const { name } = this.state.languageInfo;
    return (
      <>
        <div className={styles.header} onChange={this.handleObject}>
          {name === undefined ? "언어감지" : name}
        </div>
        <button onClick={this.handleObject}>ddddddd</button>
      </>
    );
  }
}

export default HeaderSensing;
