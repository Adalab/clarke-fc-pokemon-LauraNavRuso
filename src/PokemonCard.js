import React, { Component } from 'react';
import pikachuImg from'./pikachu.png';


class PokemonCard extends Component {
  render() {
    return (
      <div className="App">
        Soy un pokemon en concreto

        <img src={pikachuImg} alt="pikachu"/>
      </div>
    );
  }
}

export default PokemonCard;
