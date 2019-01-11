import React, { Component } from "react";
import { Todo } from "../Todo"

export class Todos extends Component {
  render() {
    return (
      this.props.todos.map(todo =>
        <li key={todo.index}>
          <Todo todo={todo} 
            onClick={() => this.props.removeTodo(todo.index)}
            markComplete={this.props.markComplete}
            markInComplete={this.props.markInComplete} />
        </li>)
    );
  }
}
