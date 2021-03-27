import React, { Component } from "react";
import styles from "./header_result.module.css";
class Header_result extends Component {
  buttonRef = React.createRef();

  state = {
    toggle: false,
    languageValue: "",
  };
  togglebutton = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  clickButton = (e) => {
    this.buttonRef = e.target;
    const value = this.buttonRef.value;
    this.setState({ languageValue: value });
    this.props.stateTarget(value);
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const toggle = this.state.toggle === true ? styles.on : styles.off;
    return (
      <ul className={styles.header}>
        <div>선택해주세요</div>
        <button className={styles.button} onClick={this.togglebutton}>
          <i className='fas fa-angle-down'></i>
        </button>
        <div className={`${toggle} ${styles.divToggle}`}>
          <div className={styles.li_wrap}>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='kr'
              >
                한국어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='en'
              >
                영어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='jp'
              >
                일본어
              </button>
            </li>
          </div>
          <div className={styles.li_wrap}>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='cn'
              >
                중국어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='nl'
              >
                네덜란드어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='de'
              >
                독일어
              </button>
            </li>
          </div>
          <div className={styles.li_wrap}>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='ru'
              >
                러시아어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='ms'
              >
                말레이시아어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='bn'
              >
                뱅갈어
              </button>
            </li>
          </div>
          <div className={styles.li_wrap}>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='vi'
              >
                베트남어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='es'
              >
                스페인어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='ar'
              >
                아랍어
              </button>
            </li>
          </div>
          <div className={styles.li_wrap}>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='it'
              >
                이탈리아어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='id'
              >
                인도네이사어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='th'
              >
                태국어
              </button>
            </li>
          </div>
          <div className={styles.li_wrap}>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='tr'
              >
                터키어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='pt'
              >
                포르투갈어
              </button>
            </li>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='fr'
              >
                프랑스어
              </button>
            </li>
          </div>
          <div className={styles.li_wrap}>
            <li>
              <button
                onClick={this.clickButton}
                ref={this.buttonRef}
                value='hi'
              >
                힌디어
              </button>
            </li>
          </div>
        </div>
      </ul>
    );
  }
}

export default Header_result;
