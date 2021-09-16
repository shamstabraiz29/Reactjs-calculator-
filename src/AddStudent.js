import React, { Component } from "react";

export default class AddStudent extends Component {
  state = {};

  onFormChange = (e) => {
    e.preventDefault();
    this.props.add(this.state.username, this.state.age, this.state.email);
  };

  render() {
    return (
      <div className="input-main">
        <form>
          <input
            placeholder="Please Enter your Name"
            className="add-input"
            type="text"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            placeholder="Please Enter your Age"
            className="add-input"
            type="number"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <input
            placeholder="Please Enter your Email adress"
            type="email"
            className="add-input"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <button type="" className="add-btn" onClick={this.onFormChange}>
            Add
          </button>
        </form>
      </div>
    );
  }
}