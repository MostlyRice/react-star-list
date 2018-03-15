import React, { Component } from 'react';
// import logo from '../logo.svg';

class PlanetList extends Component {

  render() {
      return (
        <div>
        <h2>Here is our PlanetList List!</h2>
        <p>
            {this.props.planetList.map(results => <li key={results.name}>
              The planet {results.name}
              </li>)}
          </p>
        </div>
      )
  }
}

export default PlanetList;
