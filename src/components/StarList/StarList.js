import React, { Component } from 'react';
// import logo from '../logo.svg';

class StarList extends Component {

  render() {
      return (
        <div>
            <h2>Here is our Star List!</h2>
            <p>
            {this.props.starList.map(star => <li key={star.name}>
              The star {star.name} is {star.diameter} million km in diameter and has a population of {star.population}.
              </li>)}
          </p>
        </div>
      )
  }
}

export default StarList;
