// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoList from './Child'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      task: ''
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // bind the function recieved from TodoList component
    this.removeItem = this.removeItem.bind(this);
  }

  // define the actual removeItem function
  removeItem(index) {
    // alert(index);
    const todoList = this.state.todos;
    todoList.splice(index, 1);
    this.setState({ todos: todoList });
  }

  // append a todos item
  addNewTodo() {
    this.state.todos.push(this.state.task);
    this.setState({
      todos: this.state.todos
    });
    // this.setState(lastState => ({
    //   todos:lastState.todos.concat(this.state.text)
    // }));
  }

  // handle the change of the input field
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      task: value
    });
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header" >
          <input onChange={this.handleChange} type="text" value={this.state.text} />
          <button onClick={this.addNewTodo}>Add New Task</button>
          <TodoList removeItem={this.removeItem} tasks={this.state.todos} />
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
