import React from "react";

export default class TaskInput extends React.Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="add tasks here"
          value={item}
          onChange={handleChange}
          />
          <button>Add!</button>
        </form>
      </>
    );
  }
}
