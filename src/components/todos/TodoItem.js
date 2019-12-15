import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      display: "flex",
      flexDerection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#f4f4f4",
      padding: "10px 20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()} className="todoItemContainer">
        <p className="todoItem">
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
            style={{ marginRight: `6px` }}
          />
          {title}
        </p>
        <button className="btn-del" onClick={this.props.delTodo.bind(this, id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
