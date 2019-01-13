import React from "react";
import { Todo } from "../Todo";

const Todos = props => (
  <React.Fragment>
    {props.todos.length === 0 && <p>No Todos to complete</p>}
    {props.search_results.length > 0 &&
      props.todos.length > 0 &&
      props.search_results.map(todo => (
        <li key={todo.index}>
          <Todo
            todo={todo}
            onClick={() => props.removeTodo(todo.index)}
            markComplete={props.markComplete}
            markInComplete={props.markInComplete}
          />
        </li>
      ))}
    {props.search_results.length === 0 && props.todos.length > 0 && (
      <p>No results found</p>
    )}
  </React.Fragment>
);

export { Todos };
