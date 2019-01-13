import React from "react";
import { ButtonStyle } from "./styles";

const Button = props => (
  <ButtonStyle 
    type="button"
    onClick = {props.onClick}>
    {props.text}
  </ButtonStyle>
)

export { Button }