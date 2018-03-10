import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';




class App extends Component {
  constructor(props){
		super(props);

		this.state = {
      pkInterestingData: {},
			lettersToFilter: ''
		};
	}


	componentDidMount() {
		fetch('https://pokeapi.co/api/v2/pokemon/102/')
		.then(response => response.json())
		.then(json => {
      console.log(json)

      let pkTypes= [];

      for (let t = 0; t < json.types.length; t++) {
        let pkTypeToPush = json.types[t].type.name
        pkTypes.push(pkTypeToPush)
      }

        let interestingDataToSave = {
          savedId: json.id,
          savedName: json.name,
          savedSprite: json.sprites.front_default,
          savedTypes: pkTypes
        }

			this.setState({
        pkInterestingData: interestingDataToSave
			})
      ;

		})
    .catch(function(error){
      console.log('Ha sucedido un error: ' + error);
    })
	};



  render() {
    return (
      <div className="App">
        <h1>Mi Pokedex favorita
        </h1>
        <main>
          <section className="filter">Filtrados
          </section>

          <section className="results">Resultados
            <PokemonCard />


            <p className="api-pokemon">{this.state.pkInterestingData.savedId}</p>
            <p className="api-pokemon">{this.state.pkInterestingData.savedName}</p>

            <img src={this.state.pkInterestingData.savedSprite}  alt={`${this.state.pkInterestingData.savedName} fighting`}  />

            <p className="api-pokemon">{this.state.pkInterestingData.savedTypes}</p>

          </section>
        </main>
      </div>
    );
  }
}

export default App;
