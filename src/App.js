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

    // binding it explicitly upon rendering
    // this.addNewTodo = this.addNewTodo.bind(this);
    
    // binding it explicitly upon rendering
    // this.handleChange = this.handleChange.bind(this);

    // bind the function recieved from TodoList component
    // this.removeItem = this.removeItem.bind(this);
    // binding it explicitly upon rendering
  }

  // component communication item
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
          <input onChange={this.handleChange.bind(this)} type="text" value={this.state.text} />
          <button onClick={this.addNewTodo.bind(this)}>Add New Task</button>
          <TodoList removeItem={this.removeItem.bind(this)} tasks={this.state.todos} />
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
