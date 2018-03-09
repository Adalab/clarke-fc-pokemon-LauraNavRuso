import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';

class App extends Component {
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
          </section>

        </main>
      </div>
    );
  }
}

export default App;
