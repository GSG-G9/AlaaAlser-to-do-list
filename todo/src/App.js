import React, { Component } from "react";
import TaskInput from "./Component/TaskInput";
import TaskList from "./Component/TaskList";
import { v1 as uuid } from "uuid";
export default class App extends Component {
  state = {
    tasks: [],
    id: 0,
    item: uuid(),
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    console.log(newItem);
    const updatedTasks = [...this.state.tasks, newItem];

    this.setState({
      tasks: updatedTasks,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  render() {
    return (
      <>
        <TaskInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TaskList tasks={this.state.tasks} />
      </>
    );
  }
}
