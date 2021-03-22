import React, { Component } from "react";

class Trans_Input extends Component {
  textareaRef = React.createRef();
  transChange = () => {
    const query = this.textareaRef.current.value;
    this.props.onChange(query);
    console.log(query);
  };
  render() {
    return (
      <div>
        <textarea
          ref={this.textareaRef}
          onChange={this.transChange}
          placeholder='번역'
          cols='30'
          rows='10'
        ></textarea>
      </div>
    );
  }
}

export default Trans_Input;
