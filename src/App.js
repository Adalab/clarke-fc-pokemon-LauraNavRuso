import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';
import Filter from './Filter.js';

class App extends Component {
  constructor(props){
		super(props);

		this.state = {
      pkInterestingData: [],
			lettersToFilter: ''
		};

    this.onChangeInputListener = this.onChangeInputListener.bind(this);
	}


	componentDidMount() {

    for (let i = 300; i < 303; i++) {

      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then(response => response.json())
      .then(json => {
        let pkTypes= [];
        let pkAbilities= [];

        for (let t = 0; t < json.types.length; t++) {
          let pkTypeToPush = json.types[t].type.name
          pkTypes.push(pkTypeToPush)
        }

        for (let j = 0; j < json.abilities.length; j++) {
          let pkAbilityToPush = json.abilities[j].ability.name
          pkAbilities.push(pkAbilityToPush)
        }

        let interestingDataToSave = {
          savedId: json.id,
          savedName: json.name,
          savedHeight: json.height,
          savedWeight: json.weight,
          savedSpriteFD: json.sprites.front_default,
          savedSpriteFS: json.sprites.front_shiny,
          savedSpriteFF: json.sprites.front_female,
          savedSpriteFSF: json.sprites.front_shiny_female,
          savedSpriteBD: json.sprites.back_default,
          savedSpriteBS: json.sprites.back_shiny,
          savedSpriteBF: json.sprites.back_female,
          savedSpriteBSF: json.sprites.back_shiny_female,
          savedTypes: pkTypes,
          savedAbilities: pkAbilities
         }

         fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
         .then(response => response.json())
         .then(json => {

           if (json.evolves_from_species == null) {
             interestingDataToSave.savedPreEv = "huevo";
           }
           else {
             interestingDataToSave.savedPreEv = json.evolves_from_species.name;
           }

           fetch(json.evolution_chain.url)
           .then(response => response.json())
           .then(json => {
              let evChain = [];
              let evData = json.chain;

              do {

                evChain.push(evData.species.name);

                evData = evData['evolves_to'][0];
              }

             while (!!evData && evData.hasOwnProperty('evolves_to'));

             interestingDataToSave.savedEvChain = evChain;

             this.setState({
               pkInterestingData: this.state.pkInterestingData.concat([interestingDataToSave])
             })
           })
        });
      })
      .catch(function(error){
         console.log('Ha sucedido un error: ' + error);
       });

    }
	};


  onChangeInputListener = (event) => {
		this.setState({
			lettersToFilter: event.target.value
		});
	};


  render() {
    return (
      <div className="App">
        <h1>Mi Pokedex favorita
        </h1>
        <main>
          <Filter onChangeInputListener = {this.onChangeInputListener} />

          <section className="results">
            {this.state.pkInterestingData.sort(function(a,b) {
                return a.savedId - b.savedId;
            })
              .filter(x => (x.savedName.toLowerCase().includes(this.state.lettersToFilter.toLowerCase())))
              .map(x =>(
                <PokemonCard key={x.savedId}
                            name={x.savedName}
                            id={x.savedId}
                            height={x.savedHeight}
                            weight={x.savedWeight}
                            imgUrlFD={x.savedSpriteFD}
                            imgUrlFS={x.savedSpriteFS}
                            imgUrlFF={x.savedSpriteFF}
                            imgUrlFSF={x.savedSpriteFSF}
                            imgUrlBD={x.savedSpriteBD}
                            imgUrlBS={x.savedSpriteBS}
                            imgUrlBF={x.savedSpriteBF}
                            imgUrlBSF={x.savedSpriteBSF}
                            types={x.savedTypes}
                            abilities={x.savedAbilities}
                            preEv={x.savedPreEv}
                            evChain={x.savedEvChain}
                />
            ))}
          </section>
        </main>
      </div>
    );
  }
}

export default App;



// var evoChain = [];
// var evoData = response.data.chain;
//
// do {
//   var evoDetails = evoData['evolution_details'][0];
//
//   evoChain.push({
//     "species_name": evoData.species.name,
//     "min_level": !evoDetails ? 1 : evoDetails.min_level,
//     "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
//     "item": !evoDetails ? null : evoDetails.item
//   });
//
//   evoData = evoData['evolves_to'][0];
// } while (!!evoData && evoData.hasOwnProperty('evolves_to'));



      // let evChainUrl = json.evolution_chain.url;
