import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    search: "",
  };

  hanldeChange(e) {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    const { students } = this.props;
    let studentData = [];
    let searchKey = this.state.search.trim().toLowerCase();
    if (searchKey && searchKey.length > 0) {
      console.log(searchKey);
      studentData = students.filter((i) => {
        return i.username.toLowerCase().match(searchKey);
      });
    }
    return (
      <div>
        <input
          type="text"
          name="search"
          className="search-input"
          value={this.state.search}
          placeholder="Search by Username"
          onChange={(e) => this.hanldeChange(e)}
        />

        <table>
          {studentData.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.id}</td>
                <td>{i.username}</td>
                <td>{i.age}</td>
                <td>{i.email}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}