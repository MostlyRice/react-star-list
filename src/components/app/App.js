import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newStar: {
        name: '',
        diameter: '',
        population: '',
      },
      starList:[
          {name: 'Gacrux', diameter: 117, population: 0},
          {name: 'Hadar', diameter: 13, population: 0},
          {name: 'Fomalhaut', diameter: 2, population: 0},
      ],
  }

  this.handleChangeFor = this.handleChangeFor.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangeFor = propertyName => event => {
  this.setState({
    newStar: {
      ...this.state.newStar,
      [propertyName]: event.target.value
    }
  })
}

handleSubmit(event) {
  event.preventDefault();
  this.setState({
    starList: [...this.state.starList, this.state.newStar],
    newStar: {name: '', diameter: '', population: ''}
  })
}

  render() {
      return (
          <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <CurrentNewStar newStar={this.state.newStar}/>
          <NewStarForm 
          newStar={this.state.newStar} 
          handleChangeFor={this.handleChangeFor} 
          handleSubmit={this.handleSubmit}/>
          <StarList starList={this.state.starList}/>
        </div>
      )
  }
}

export default App;
