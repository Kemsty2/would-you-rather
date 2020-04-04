import React, { Component } from "react";

class Option extends Component {
  render() {
    return (
      <label className="container_radio version_2">
        {this.props.label}
        <input
          type="radio"
          name={this.props.id}
          value={this.props.label}
          className="required"
        />
        <span className="checkmark"></span>
      </label>
    );
  }
}

export default Option;
