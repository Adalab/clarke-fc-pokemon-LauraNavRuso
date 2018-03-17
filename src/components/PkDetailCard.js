import React, { Component } from 'react';

class PkDetailCard extends Component {
  render() {
    return (
      <div className="pkDetailCard-generalContainer">
        <p className="pk-height">Nombre: {this.props.name}</p>
        <p className="pk-weight">Weight: {this.props.weight}</p>
        <p className="pk-weight">Weight: {this.props.weight}</p>


      </div>
    );
  }
}

export default PkDetailCard;
