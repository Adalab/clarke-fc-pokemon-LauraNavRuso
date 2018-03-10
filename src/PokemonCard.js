import React, { Component } from 'react';
import pikachuImg from'./pikachu.png';


class PokemonCard extends Component {
  render() {
    return (
      <div className="App">
        Soy un pokemon en concreto
        <img src={pikachuImg} alt="pikachu"/>



        <p className="api-pokemon">{this.props.id}</p>
        <p className="api-pokemon">{this.props.name}</p>

        <img src={this.props.imgUrl}  alt={`${this.props.name} fighting`}  />

        <p className="api-pokemon">{this.props.types}</p>


      </div>
    );
  }
}

export default PokemonCard;
