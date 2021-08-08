// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoList from './Child'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      task:''
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addNewTodo(){
    this.state.todos.push(this.state.task);
    this.setState({
      todos: this.state.todos
    });
  }

  handleChange(e){
    const value = e.target.value;
    this.setState({
      task:value
    });
  }
  render() {

    return (
      <div className="App" >
        <header className="App-header" >
          <input onChange={this.handleChange} type="text" value={this.state.text} />
          <button onClick={this.addNewTodo}>Add New Task</button>
          <TodoList tasks={this.state.todos}/>
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
