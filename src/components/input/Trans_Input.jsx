import React, { Component } from "react";
import styles from "./trans_input.module.css";

class Trans_Input extends Component {
  textareaRef = React.createRef();
  transChange = () => {
    const query = this.textareaRef.current.value;
    const code = this.props.languageInfo.code;
    const target = this.props.target;
    query && this.props.onChange(query, code, target);
    query && this.props.onHeader(query);
    console.log(code);
  };

  input = () => {
    const query = this.textareaRef.current.value;
    const code = this.props.languageInfo.code;
    query && this.props.onInput(query, code);
  };

  render() {
    return (
      <div className={styles.style}>
        <textarea
          className={styles.input}
          ref={this.textareaRef}
          onChange={this.transChange}
          onKeyUp={this.input}
          placeholder='번역 입력해주세요'
          cols='30'
          rows='20'
        ></textarea>
      </div>
    );
  }
}

export default Trans_Input;
