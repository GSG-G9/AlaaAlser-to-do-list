import React from "react";

export default class TaskInput extends React.Component {
  render() {
    const {item,handleChange, handleSubmit, editItem } = this.props;
    return (
      <>
      <div >
      <h1>My To Do List</h1>
        <form  className="list" onSubmit={handleSubmit}>
          <input  className="text"
            type="text"
            placeholder="add tasks here"
            required
            value = {item}
            onChange={handleChange}
          />
          <button type="submit">{editItem ? "Save" : "Add"}</button>
        </form>
      </div>
      </>
    );
  }
}
