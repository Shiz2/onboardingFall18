import React, { Component } from "react";
import { Button } from "../Button"

export class Todo extends Component {
  render() {
    return (
      <React.Fragment>
        <input 
          type='checkbox'
          name={this.props.todo.text}
          checked={this.props.todo.resolved}
          onChange={this.props.todo.resolved ? 
            () => this.props.markInComplete(this.props.todo.index) 
            : 
            () => this.props.markComplete(this.props.todo.index)}
        />
        {this.props.todo.resolved? 
          <strike>{this.props.todo.text}</strike>
          :
          <span>{this.props.todo.text}</span>}
        <Button text='Delete' onClick={this.props.onClick}/>
      </React.Fragment>  
    );
  }
}
