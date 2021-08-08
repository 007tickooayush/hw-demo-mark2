// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Child from './Child';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };

    this.Increment = this.Increment.bind(this);
  }

  Increment(){
    this.setState({count: this.state.count+1});
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header" >
          <button onClick={this.Increment}>increment</button>
          <Child  text="example counter" value={this.state.count} />
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
