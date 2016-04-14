import React from 'react';

export default class BasketProduct extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div>
        {this.props.children}
        <button onClick={() => {}}>Delete</button>
      </div>
    );
  }
}

BasketProduct.propTypes = {
  children: React.PropTypes.element,
};
