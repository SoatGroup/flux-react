import React from 'react';

export default class ItemProduct extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div>
        {this.props.children}
        <button onClick={() => {}}>Add</button>
      </div>
    );
  }
}

ItemProduct.propTypes = {
  children: React.PropTypes.element,
};