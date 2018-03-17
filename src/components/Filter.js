import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <section className="filter">
        <label className="filter-label-to-input">Filtra los pokemon por letras contenidas en su nombre</label>
        <input className="letters-to-seek-input" type="text" placeholder="Letra(s) a buscar" onChange= { this.props.onChangeInputListener }></input>
      </section>
    );
  }
}

export default Filter;
