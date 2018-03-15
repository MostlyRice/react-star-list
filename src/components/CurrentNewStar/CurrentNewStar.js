import React, { Component } from 'react';
// import logo from '../logo.svg';

class CurrentNewStar extends Component {

  render() {
      return (
        <div>
            <h2>This is a current new star?</h2>
            <p>New star is {this.props.newStar.name} and has a diameter {this.props.newStar.diameter} km long and a population of {this.props.newStar.population}.</p>
        </div>
      )
  }
}

export default CurrentNewStar;
