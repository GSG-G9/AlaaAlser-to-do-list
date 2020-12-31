import React, { Component } from "react";
import TaskInput from "./Component/TaskInput";
import TaskList from "./Component/TaskList";
import { v1 as uuid } from "uuid";

export default class App extends Component {
  state = {
    tasks: [],
    id: 0,
    item: "",
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
      complete: false,
    };

    const updatedTasks = [...this.state.tasks, newItem];

    this.setState({
      tasks: updatedTasks,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  handleDelete = (id) => {
    const filteredTasks = this.state.tasks.filter((item) => item.id !== id);
    this.setState({
      tasks: filteredTasks,
    });
  };

  handleEdit = (id) => {
    const filteredTasks = this.state.tasks.filter((item) => item.id !== id);

    const selectedTask= this.state.tasks.find((item) => item.id === id);

    this.setState({
      tasks: filteredTasks,
      item: selectedTask.title,
      editItem: true,
      id: id,
    });
  };



  render() {
    return (
      <div className="content">
        <div className="mainPage">

        <TaskInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
          />
        <TaskList
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          
          />
          </div>
      </div>
    );
  }
}
