import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';

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
    let list = [];

    for (let i = 1; i < 26; i++) {
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
          <section className="filter">
            <label>Filtra los pokemon por letras contenidas en su nombre</label>
            <input className="letters-to-seek-input" type="text" placeholder="Letra(s) a buscar" onChange= { this.onChangeInputListener }></input>
          </section>

          <section className="results">
            {this.state.pkInterestingData.sort(function(a,b) {
                return a.savedId - b.savedId;
            })
              .filter(x => (x.savedName.toLowerCase().includes(this.state.lettersToFilter.toLowerCase())))
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

            // <Filter />
