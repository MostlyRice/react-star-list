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
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p>
      {this.state.starlist.map(star => <p key={star}>  {star} </p>)}
      </p>
      </div>
    );
  }
}

export default App;
