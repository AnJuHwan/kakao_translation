import React, { Component } from "react";
import styles from "./header_sensing.module.css";
class HeaderSensing extends Component {
  render() {
    const { inputSrc } = this.props;

    switch (inputSrc) {
      case "kr":
        return <div className={styles.header}>한국어</div>;
        break;
      case "en":
        return <div className={styles.header}>영어</div>;
        break;
      case "jp":
        return <div className={styles.header}>일본어</div>;
        break;
      case "cn":
        return <div className={styles.header}>중국어</div>;
        break;
      case "vi":
        return <div className={styles.header}>베트남어</div>;
        break;
      case "id":
        return <div className={styles.header}>인도네시아어</div>;
        break;
      case "ar":
        return <div className={styles.header}>아랍어</div>;
        break;
      case "bn":
        return <div className={styles.header}>뱅갈어</div>;
        break;
      case "de":
        return <div className={styles.header}>독일어</div>;
        break;
      case "es":
        return <div className={styles.header}>스페인어</div>;
        break;
      case "fr":
        return <div className={styles.header}>프랑스어</div>;
        break;
      case "hi":
        return <div className={styles.header}>힌디어</div>;
        break;
      case "it":
        return <div className={styles.header}>이탈리아어</div>;
        break;
      case "ms":
        return <div className={styles.header}>말레이시아어</div>;
        break;
      case "nl":
        return <div className={styles.header}>네덜란드어</div>;
        break;
      case "pt":
        return <div className={styles.header}>포르투갈어</div>;
        break;
      case "ru":
        return <div className={styles.header}>러시아어</div>;
        break;
      case "th":
        return <div className={styles.header}>태국어</div>;
        break;
      case "tr":
        return <div className={styles.header}>터키어</div>;
        break;

      default:
        return <div className={styles.header}>언어감지</div>;
        break;
    }
    return <></>;
  }
}

export default HeaderSensing;
