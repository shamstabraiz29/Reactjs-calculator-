import React, { Component } from "react";
import KeyPad from "./KeyPad";
import Result from "./Result";

export default class Calculator extends Component {
  state = {
    result: "", 
  };

  onClick = (button) => {
    if (button === "=") {
      this.Calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  Calculate = () => {
    this.setState({
      result: (eval(this.state.result) || "") + "",
    });
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="Calculate-main">
        <h1>Calculator</h1>
        <Result result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}
