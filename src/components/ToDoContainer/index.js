import React, { Component } from "react";
import { Add } from "../Add";
import { Todos } from "../Todos";
import { Input } from "../Input"
import { MainContainer, SectionHeader, Container } from "./styles" ;

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
    return (
        <MainContainer>
          <Container>
            <Add onClick={this.addTodo} />
          </Container>
          <Container>
            <SectionHeader>Current Todos</SectionHeader>
            <Todos search_results={this.search()}
              todos={this.state.todos} 
              removeTodo={this.removeTodo} 
              markComplete={this.markComplete}
              markInComplete={this.markInComplete} />
          </Container>
          <Container>
            <SectionHeader>Search ToDos</SectionHeader>
            <Input 
              name="search"
              value={this.state.search_text}
              updateText={this.updateSearch}
            />
          </Container>
        </MainContainer>
    );
  }
}
