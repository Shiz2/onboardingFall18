import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button 
        type="button"
        onClick = {this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

