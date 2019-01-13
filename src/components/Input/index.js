import React from "react";
import { InputStyle } from "./style";

const Input = props =>(
  <InputStyle
    type="text"
    name={props.name}
    value={props.value}
    onChange={event => props.updateText(event.target.value)}
  />
)

export { Input }
