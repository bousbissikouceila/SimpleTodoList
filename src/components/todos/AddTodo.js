import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
  state = {
    title: ""
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.title !== "") {
      this.props.AddTodo(this.state.title);
      this.setState({ title: "" });
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{
            flex: "10",
            padding: "7px 10px",
            border: "1px #ccc solid",
            color: "#444"
          }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          style={{ flex: "1" }}
          className="btn"
        />
      </form>
    );
  }
}
AddTodo.propType = {
  AddTodo: PropTypes.func.isRequired
};

export default AddTodo;
