import React from "react";

export default class TaskInput extends React.Component {
  render() {
    const {handleChange, handleSubmit, editItem } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add tasks here"
            required
            onChange={handleChange}
          />
          <button type="submit">{editItem ? "Edit task" : "Add task"}</button>
        </form>
      </>
    );
  }
}
