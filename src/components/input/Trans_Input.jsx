import React, { Component } from "react";
import styles from "./trans_input.module.css";

class Trans_Input extends Component {
  textareaRef = React.createRef();
  transChange = () => {
    const query = this.textareaRef.current.value;
    this.props.onChange(query);
    this.props.onHeader(query);
  };
  render() {
    return (
      <div className={styles.style}>
        <textarea
          className={styles.input}
          ref={this.textareaRef}
          onChange={this.transChange}
          placeholder='번역 입력해주세요'
          cols='30'
          rows='20'
        ></textarea>
      </div>
    );
  }
}

export default Trans_Input;
