import React, { Component } from 'react';
// import logo from '../logo.svg';

class StarList extends Component {

  render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
            <input value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} placeholder="Star Name" />
            <input value={this.props.newStar.diameter} onChange={this.props.handleChangeFor('diameter')} placeholder="Diameter of Star" />
            <input value={this.props.newStar.population} onChange={this.props.handleChangeFor('population')} placeholder="Population of Star"/>
            <input type="submit" value="Submit new Star!" />
        </form>
      )
  }
}

export default StarList;
