import React from "react";
import { Button } from "../Button"

const Todo = props => (
  <React.Fragment>
    <input 
      type='checkbox'
      name={props.todo.text}
      checked={props.todo.resolved}
      onChange={props.todo.resolved ? 
        () => props.markInComplete(props.todo.index) 
        : 
        () => props.markComplete(props.todo.index)}
    />
    {props.todo.resolved? 
      <strike>{props.todo.text}</strike>
      :
      <span>{props.todo.text}</span>}
    <Button text='Delete' onClick={props.onClick}/>
  </React.Fragment>  
) 

export { Todo }
