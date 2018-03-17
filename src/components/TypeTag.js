import React, { Component } from 'react';

class TypeTag extends Component {
  render() {
    return (
      <li className={`pk-type-tag pk-type-tag-${this.props.type}`}>
        {this.props.type}
      </li>
    );
  }
}

export default TypeTag;
