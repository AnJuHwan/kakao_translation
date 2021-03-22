import React, { Component } from "react";

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
      <div>
        <textarea
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
