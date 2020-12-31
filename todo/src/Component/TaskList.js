import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  render() {
    const { tasks, handleDelete, handleEdit } = this.props;
    console.log(this.props.tasks);
    return (
      <ul>
        <h3>todo list</h3>
        {tasks.map((item) => {
          return (
            <TaskItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
