import React, { Component } from 'react';
import TypeTag from './TypeTag.js';

class PkDetailCard extends Component {
  render() {
    return (
      <div className="pkDetailCard-generalContainer">
        <p className="pk-id">{this.props.id}</p>
        <p className="pk-name">{this.props.name}</p>
        <img className="pk-img" src={this.props.imgUrlFD} alt="" />

        <ul className="types-container">
          {this.props.types.map(x =>(
              <TypeTag type={x}
                       key={x}
              />
          ))}
        </ul>

        <p className="pk-weight">Weight: {this.props.weight}</p>
        <p className="pk-height">Height: {this.props.height}</p>
        <ul className="abilities-container">Abilities:
          {this.props.abilities.map(x =>(
               <li key={`${x}`}> {x} </li>
          ))}
        </ul>

        <img className="pk-img" src={this.props.imgUrlFD} alt="" />
        <img className="pk-img" src={this.props.imgUrl} alt="" />
        <img className="pk-img" src={this.props.imgUrlFS} alt="" />
        <img className="pk-img" src={this.props.imgUrlFF} alt="" />
        <img className="pk-img" src={this.props.imgUrlFSF} alt="" />
        <img className="pk-img" src={this.props.imgUrlBD} alt="" />
        <img className="pk-img" src={this.props.imgUrlBS} alt="" />
        <img className="pk-img" src={this.props.imgUrlBSF} alt="" />

        <ol className="evolutionChain-container">Cadena de evolución:
          {this.props.evChain.map(x =>(
              <li key={`${x}`}> {x} </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default PkDetailCard;
