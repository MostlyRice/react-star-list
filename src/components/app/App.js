import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);

  this.state = { 
    newStar: {
      Name: '',
      Diameter: '',
    },
    
    starlist:[ {Name:'Gacrux', Diameter:'117 Million Kilometers'}, {Name:'Fomalhaut',Diameter:'2 Miles'}, 
    {Name:'Hadar', Diameter:'13 Million Kilometers'}]
  },
    this.handleClick = this.handleClick.bind(this);
  };

  handleChangeFor= (propertyName) => (event) => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    });
  }

  handleClick(){
    console.log("clicked");
    this.setState({
      newStar: {
        Name: '',
        Diameter: '',
      },
      starlist: [...this.state.starlist, this.state.newStar],
    })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <input value={this.state.newStar.Name} onChange={this.handleChangeFor('Name')} />
      <input value={this.state.newStar.Diameter} onChange={this.handleChangeFor('Diameter')} />
      <button onClick={this.handleClick}> Add a new Star!</button>
      <p>
        This star {this.state.newStar.Name} and it'a diameter is {this.state.newStar.Diameter}
      </p>
      <p>
      {this.state.starlist.map( (star) => <p key={star}>The star is {star.Name} and it's diameter is {star.Diameter} </p>)}
      </p>
      </div>
    );
  }
}

export default App;
