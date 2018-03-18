import React, { Component } from 'react';
import TypeTag from './TypeTag.js';

class PokemonCard extends Component {

  render() {
    function capitalizeFirstLetter(s) {
        return s[0].toUpperCase() + s.slice(1);
    }



    return (
      <div className="pk-card">

        <p className="pk-id">{this.props.id}</p>
        <p className="pk-name">{capitalizeFirstLetter(this.props.name)}</p>
        <img className="pk-img" src={this.props.imgUrlFD} alt="" />

        <ul className="types-container">
          {this.props.types.map(x =>(
              <TypeTag type={x}
                       key={x}
              />
          ))}
        </ul>

        <p className="pk-preEv">Evolution from: {this.props.preEv}</p>
      </div>
    );
  }
}

export default PokemonCard;

    // let namePartiallyCapitalized = capitalizeFirstLetter(this.props.name);
