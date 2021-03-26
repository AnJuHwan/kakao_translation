import React, { Component } from "react";
import styles from "./header_result.module.css";
class Header_result extends Component {
  state = {
    toggle: false,
  };
  togglebutton = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const toggle = this.state.toggle === true ? styles.on : styles.off;
    return (
      <ul className={styles.header}>
        <div>한국어</div>

        <button className={styles.button} onClick={this.togglebutton}>
          <i className='fas fa-angle-down'></i>
        </button>
        <div className={`${toggle} ${styles.divToggle}`}>
          <div className={styles.li_wrap}>
            <li>한국어</li>
            <li>영어</li>
            <li>일본어</li>
          </div>
          <div className={styles.li_wrap}>
            <li>중국어</li>
            <li>네덜란드어</li>
            <li>독일어</li>
          </div>
          <div className={styles.li_wrap}>
            <li>러시아어</li>
            <li>말레이시아어</li>
            <li>벵골어</li>
          </div>
          <div className={styles.li_wrap}>
            <li>베트남어</li>
            <li>스페인어</li>
            <li>아랍어</li>
          </div>
          <div className={styles.li_wrap}>
            <li>이탈리아어</li>
            <li>인도네이사어</li>
            <li>태국어</li>
          </div>
          <div className={styles.li_wrap}>
            <li>터키어</li>
            <li>포르투갈어</li>
            <li>프랑스어</li>
          </div>
          <div className={styles.li_wrap}>
            <li>힌디어</li>
          </div>
        </div>
      </ul>
    );
  }
}

export default Header_result;
