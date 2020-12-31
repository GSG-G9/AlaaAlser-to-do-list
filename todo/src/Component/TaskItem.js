import React, { Component } from "react";

export default class TaskItem extends Component {
  render() {
    const { title, handleDelete } = this.props;

    return (
      <li>
        <h6>{title}</h6>
        <button onClick={handleDelete}>Remove</button>
      </li>
    );
  }
}
