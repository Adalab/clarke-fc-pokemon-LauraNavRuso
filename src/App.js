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
    let list = [];

    for (let i = 200; i < 226; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then(response => response.json())
      .then(json => {
        let pkTypes= [];

        for (let t = 0; t < json.types.length; t++) {
          let pkTypeToPush = json.types[t].type.name
          pkTypes.push(pkTypeToPush)
        }

        let interestingDataToSave = {
          savedId: json.id,
          savedName: json.name,
          savedHeight: json.height,
          savedWeight: json.weight,
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
          <Filter onChangeInputListener = {this.onChangeInputListener} />

          <section className="results">
            {this.state.pkInterestingData.sort(function(a,b) {
                return a.savedId - b.savedId;
            })
              .filter(x => (x.savedName.toLowerCase().includes(this.state.lettersToFilter.toLowerCase())))
              .map(x =>(
                <PokemonCard name={x.savedName}
                            id={x.savedId}
                            height={x.savedHeight}
                            weight={x.savedWeight}
                            imgUrl={x.savedSprite}
                            types={x.savedTypes}
                            key={x.savedId}
                />
            ))}

          </section>
        </main>
      </div>
    );
  }
}

export default App;
