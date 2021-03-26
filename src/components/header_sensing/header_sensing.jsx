import React, { Component } from "react";
import styles from "./header_sensing.module.css";
class HeaderSensing extends Component {
  render() {
    const { inputSrc } = this.props;

    switch (inputSrc) {
      case "kr":
        return <div className={styles.header}>한국어</div>;

      case "en":
        return <div className={styles.header}>영어</div>;

      case "jp":
        return <div className={styles.header}>일본어</div>;

      case "cn":
        return <div className={styles.header}>중국어</div>;

      case "vi":
        return <div className={styles.header}>베트남어</div>;

      case "id":
        return <div className={styles.header}>인도네시아어</div>;

      case "ar":
        return <div className={styles.header}>아랍어</div>;

      case "bn":
        return <div className={styles.header}>뱅갈어</div>;

      case "de":
        return <div className={styles.header}>독일어</div>;

      case "es":
        return <div className={styles.header}>스페인어</div>;

      case "fr":
        return <div className={styles.header}>프랑스어</div>;

      case "hi":
        return <div className={styles.header}>힌디어</div>;

      case "it":
        return <div className={styles.header}>이탈리아어</div>;

      case "ms":
        return <div className={styles.header}>말레이시아어</div>;

      case "nl":
        return <div className={styles.header}>네덜란드어</div>;

      case "pt":
        return <div className={styles.header}>포르투갈어</div>;

      case "ru":
        return <div className={styles.header}>러시아어</div>;

      case "th":
        return <div className={styles.header}>태국어</div>;

      case "tr":
        return <div className={styles.header}>터키어</div>;

      default:
        return <div className={styles.header}>언어감지</div>;
    }
    return <></>;
  }
}

export default HeaderSensing;
