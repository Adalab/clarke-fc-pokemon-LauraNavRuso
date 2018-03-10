import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';




class App extends Component {
  constructor(props){
		super(props);

		this.state = {
			pokemonData: {},
      interestingData: {},
			lettersToFilter: ''
		};
	}


	componentDidMount() {
		fetch('https://pokeapi.co/api/v2/pokemon/60/')
		.then(response => response.json())
		.then(json => {
      console.log(json)

        let interestingDataToSave = {
          savedId: json.id,
          savedName: json.name,
          savedSprite: json.sprites.front_default,
          savedTypes: json.types[0].type.name
        }

			this.setState({
				pokemonData: json,
        interestingData: interestingDataToSave
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


            <p className="api-pokemon">{this.state.interestingData.savedId}</p>
            <p className="api-pokemon">{this.state.interestingData.savedName}</p>
            <p className="api-pokemon">{this.state.interestingData.savedSprite}</p>
            <p className="api-pokemon">{this.state.interestingData.savedTypes}</p>

          </section>
        </main>
      </div>
    );
  }
}

export default App;


            // <p className="api-pokemon">{this.state.pokemonData.map(this.getType)}</p>


      // <p className="api-pokemon">{this.state.pokemonData.types.type.name}</p>

          // <p className="api-pokemon">{this.state.pokemonData.sprites.front_default}</p>


          // getType(x) {
          //
          //   let hola = x.sprites.front_default
          //   return (
          //     hola
          //     <Row
          //        key={x.id}
          //        contact={contact}
          //        columns={this.props.children} />
          //
          //   );
          // };

          // <p className="api-pokemon">{this.state.interestingData}</p>
          //
          // <p className="api-pokemon">{this.state.interestingData[0]}</p>
          //
          // <p className="api-pokemon">{this.state.interestingData[1]}</p>
