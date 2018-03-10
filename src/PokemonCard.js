import React, { Component } from 'react';

class PokemonCard extends Component {
  render() {
    return (
      <div className="pk-card">

        <p className="api-pokemon">{this.props.id}</p>
        <p className="api-pokemon">{this.props.name}</p>

        <img src={this.props.imgUrl}  alt={`${this.props.name} fighting`}  />

        <p className="api-pokemon">{this.props.types[0]}</p>
        <p className="api-pokemon">{this.props.types[1]}</p>
        
      </div>
    );
  }
}

export default PokemonCard;
