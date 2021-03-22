import React, { Component } from "react";
import styles from "./trans_result.module.css";
class Trans_Result extends Component {
  state = {
    trans: [],
  };

  handleChange = () => {
    const { data } = this.props;
    this.setState({ trans: data });
  };

  render() {
    return (
      <div className={styles.style}>
        <textarea
          className={styles.result}
          placeholder='번역됩니다'
          cols='30'
          rows='20'
          onChange={this.handleChange}
          value={this.props.data}
        ></textarea>
      </div>
    );
  }
}

export default Trans_Result;
