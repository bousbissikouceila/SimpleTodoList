import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/todos/AddTodo";
import Todos from "./components/todos/Todos";
import About from "./components/pages/About";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "Go to the gym",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "Meet with my friend",
      //   completed: false
      // },
      // {
      //   id: 3,
      //   title: "Do some programming",
      //   completed: false
      // }
    ]
  };

  // toggle complete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // delete todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add Todo
  AddTodo = title => {
    console.log(this.state.todos.length);
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      complete: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo AddTodo={this.AddTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
