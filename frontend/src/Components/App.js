import React, { Component } from 'react';
import '../Styles/App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Idea Board</h1>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
