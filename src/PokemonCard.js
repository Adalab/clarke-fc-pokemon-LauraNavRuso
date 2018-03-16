import React, { Component } from 'react';
import TypeTag from './TypeTag.js';

class PokemonCard extends Component {

  render() {
    function capitalizeFirstLetter(s) {
        return s[0].toUpperCase() + s.slice(1);
    }

    let namePartiallyCapitalized = capitalizeFirstLetter(this.props.name);

    return (
      <div className="pk-card">

        <p className="pk-id">{this.props.id}</p>
        <p className="pk-name">{namePartiallyCapitalized}</p>

        <p className="pk-height">Height: {this.props.height}</p>
        <p className="pk-weight">Weight: {this.props.weight}</p>

        <img className="pk-img" src={this.props.imgUrlFD} alt="" />

        <img className="pk-img" src={this.props.imgUrl} alt="" />
        <img className="pk-img" src={this.props.imgUrlFS} alt="" />
        <img className="pk-img" src={this.props.imgUrlFF} alt="" />
        <img className="pk-img" src={this.props.imgUrlFSF} alt="" />
        <img className="pk-img" src={this.props.imgUrlBD} alt="" />
        <img className="pk-img" src={this.props.imgUrlBS} alt="" />
        <img className="pk-img" src={this.props.imgUrlBSF} alt="" />

        <ul className="abilities-container">Abilities:
          {this.props.abilities.map(x =>(
               <li> {x} </li>
          ))}
        </ul>

        <ul className="types-container">
          {this.props.types.map(x =>(
              <TypeTag type={x}
                       key={x}
              />
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonCard;
