import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';

class App extends Component {
  constructor(props){
		super(props);

		this.state = {
      pkInterestingData: [],
			lettersToFilter: ''
		};
	}


	componentDidMount() {
    let list = [];

    for (let i = 100; i < 125; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
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

         list.push(interestingDataToSave);

         this.setState({
           pkInterestingData: this.state.pkInterestingData.concat([interestingDataToSave])
         })
       })
       .catch(function(error){
         console.log('Ha sucedido un error: ' + error);
       });
     }
	};


  render() {
    return (
      <div className="App">
        <h1>Mi Pokedex favorita
        </h1>
        <main>
          <section className="filter">Filtrados
          </section>

          <section className="results">
            {this.state.pkInterestingData.sort(function(a,b) {
                return a.savedId - b.savedId;
            })
              .map(x =>(
                <PokemonCard name={x.savedName}
                            id={x.savedId}
                            imgUrl={x.savedSprite}
                            types={x.savedTypes}
                />
            ))}

          </section>
        </main>
      </div>
    );
  }
}

export default App;
