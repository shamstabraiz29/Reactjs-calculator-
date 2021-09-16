import React, { Component } from "react";

export default class TableData extends Component {
  state = {
    userName: "",
    userAge: "",
    userEmail: "",
  };

  onchanghandker = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderTableData() {

    const { updateButton } = this.props;
    return this.props.students.map((student, index) => {
      const { id, username, age, email, edit } = student;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>
            {edit ? (
              <input
                name="userName"
                className="edit-input"
                placeholder={username}
                // value={username}
                onChange={this.onchanghandker}
              />
            ) : (
              username
            )}
          </td>
          <td>
            {edit ? (
              <input
                name="userAge"
                className="edit-input"
                // value={age}
                placeholder={age}
                onChange={this.onchanghandker}
              />
            ) : (
              age
            )}
          </td>
          <td>
            {edit ? (
              <input
                name="userEmail"
                className="edit-input"
                placeholder={email}
                // value={email}
                onChange={this.onchanghandker}
              />
            ) : (
              email
            )}
          </td>
          <button
            type=""
            className="btn"
            onClick={() => this.props.delete(index)}
          >
            Remove
          </button>
          {edit ? (
            <button
              type=""
              className="btn"
              onClick={() => {
                updateButton(index, {
                  username: this.state.userName,
                  age: this.state.userAge,
                  email: this.state.userEmail,
                });
              }}
            >
              Update
            </button>
          ) : (
            <button
              type=""
              className="btn"
              onClick={() => this.props.edit(index)}
            >
              Edit
            </button>
          )}
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.props.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}