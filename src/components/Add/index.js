import React, { Component } from "react";
import { Input } from  "../Input"
import { Button } from "../Button"

export class Add extends Component {
  state = {
    text: ""
  };

  updateText = text => this.setState({ text })

  updateParent = () => {
    this.props.onClick(this.state.text);
    this.setState({text: ""});
  }

  render() {
    return (
      <React.Fragment>
        <Input 
          name={this.state.text} 
          value={this.state.text} 
          updateText={this.updateText}/>

        <Button onClick={this.updateParent} text='Add'/>
      </React.Fragment>
    );
  }
}
