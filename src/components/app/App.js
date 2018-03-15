import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = { 
    starlist:['Gacrux', 'Hadar', 'Fomalhaut', 'Elnath'],
    }
  };

  render() {
    let starlistItemArray = [];
    for (let i=0; i < this.state.starlist.length; i++){
      starlistItemArray.push(<p>{this.state.starlist[ i ]}</p>)
    }

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p>
      {starlistItemArray}
      </p>
      </div>
    );
  }
}

export default App;
