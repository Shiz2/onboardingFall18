import React, { Component } from "react";
import { Add } from "../Add";
import { Todos } from "../Todos";
import { Input } from "../Input"

export class ToDoContainer extends Component {
  state = {
    todos: [],
    index: 0,
    search_text: ''
  };

  addTodo = text => {
    if (text) {
      this.setState({
        index: this.state.index + 1,
        todos: [
          ...this.state.todos,
          { index: this.state.index, text, resolved: false }
        ]
      });
    }
  };

  removeTodo = todo_index => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.index !== todo_index)
    });
  };

  markTodo = (todo_index, bool_val) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo_index === todo.index
          ? Object.assign({}, todo, { resolved: bool_val })
          : todo
      )
    });
  };

  markComplete = todo_index => this.markTodo(todo_index, true);

  markInComplete = todo_index => this.markTodo(todo_index, false);

  updateSearch = search_text => {
    this.setState({ search_text });
    // this.setState({search_text: ""});
  }

  search = () => {
    if (this.state.search_text) {
      return this.state.todos.filter(todo =>
        todo.text.includes(this.state.search_text))
    }
    return this.state.todos
  }


  render() {
    console.log('text: ' + this.state.search_text)
    console.log('results: ' + this.search())
    return (
      <React.Fragment>
        <Add onClick={this.addTodo} />
        <Todos todos={this.search()} 
          removeTodo={this.removeTodo} 
          markComplete={this.markComplete}
          markInComplete={this.markInComplete} />
        <Input 
          name="search"
          value={this.state.search_text}
          updateText={this.updateSearch}
        />
      </React.Fragment>
    );
  }
}
