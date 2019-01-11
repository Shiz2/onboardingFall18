import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        value={this.props.value}
        onChange={event => this.props.updateText(event.target.value)}
      />
    );
  }
}
