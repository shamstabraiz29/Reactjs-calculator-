import React, { Component } from "react";
import AddStudent from "./AddStudent";
import SearchBar from "./SearchBar";
import TableData from "./TableData";
import Calculator from "./Calculator";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          username: "Larry",
          age: 25,
          email: "Larry22@gmail.com",
          edit: false,
        },
        {
          id: 2,
          username: "page",
          age: 25,
          email: "page2@gmail.com",
          edit: false,
        },
        {
          id: 3,
          username: "Ahmad",
          age: 22,
          email: "ahamd2@gmail.com",
          edit: false,
        },
        {
          id: 4,
          username: "john",
          age: 27,
          email: "john2@gmail.com",
          edit: false,
        },
        {
          id: 5,
          username: "ezra",
          age: 50,
          email: "ezra@gmail.com",
          edit: false,
        },
        {
          id: 6,
          username: "david",
          age: 57,
          email: "david@gmail.com",
          edit: false,
        },
        {
          id: 7,
          username: "watson",
          age: 37,
          email: "watson@gmail.com",
          edit: false,
        },
      ],
    };
  }

  add = (name, age, email) => {
    this.setState({
      students: [
        ...this.state.students,
        {
          id: this.state.students.length + 1,
          username: name,
          age: age,
          email: email,
        },
      ],
    });
  };

  delete = (index) => {
    this.state.students.splice(index, 1);
    this.setState({
      students: this.state.students,
    });
  };

  edit = (index) => {
    let a = [...this.state.students];
    console.log(a);
    a[index].edit = true;
    this.setState({
      students: a,
    });
  };

  updateButton = (i, e) => {
    // console.log(i, e);
    const n = { ...this.state.students[i], ...e, edit: false };
    let b = this.state.students.map((item, ind) => {
      console.log(ind);
      if (ind === i) {
        return n;
      }
      return item;
    });

    this.setState({
      students: b,
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Table</h1>
        <SearchBar students={this.state.students} />
        <TableData
          students={this.state.students}
          delete={this.delete}
          edit={this.edit}
          updateButton={this.updateButton}
          onUpdateInput={this.onUpdateInput}
        />
        <AddStudent add={this.add} />
        <Calculator />
      </div>
    );
  }
}
