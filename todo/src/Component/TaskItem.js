import React, { Component } from "react";

export default class TaskItem extends Component {
  render() {
    const { title, handleDelete, handleEdit} = this.props;

    return (
      <li className="list">
        <h3>{title}</h3>
        <button onClick={handleEdit}>Edit</button>
        <span  className="delete" onClick={handleDelete}>X</span>
      </li>
    );
  }
}
