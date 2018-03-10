import React, { Component } from 'react';

class TypeTag extends Component {
  render() {
    return (
      <div className="pk-type-tag">
        <div className="api-pokemon">{this.props.type}</div>
      </div>
    );
  }
}

export default TypeTag;
