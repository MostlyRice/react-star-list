import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = { 
    starlist:[ {Name:'Gacrux', Diameter:'117 Million Kilometers'}, {Name:'Fomalhaut',Diameter:'2 Miles'}, 
    {Name:'Hadar', Diameter:'13 Million Kilometers'}]
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
      {this.state.starlist.map( (star,i) => <p key={star}>  {star.Name}, {star.Diameter} </p>)}
      </p>
      </div>
    );
  }
}

export default App;
