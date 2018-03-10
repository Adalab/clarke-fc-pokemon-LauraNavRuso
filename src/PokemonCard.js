import React, { Component } from 'react';
import TypeTag from './TypeTag.js';

class PokemonCard extends Component {
  render() {
    return (
      <div className="pk-card">
        <p className="pk-id">{this.props.id}</p>
        <p className="pk-name">{this.props.name}</p>

        <img src={this.props.imgUrl}  alt={`${this.props.name} fighting`}  />

        <div className="types-container">
          {this.props.types.map(x =>(
              <TypeTag type={x} />
          ))}
        </div>
      </div>
    );
  }
}

export default PokemonCard;
