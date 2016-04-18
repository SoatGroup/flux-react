import React from 'react';

export default class Product extends React.Component {
  render() {
    if (this.props.product === {}) {
      return null;
    }
    return (
      <div className="product">
        <div>{this.props.product.name}</div>
        <div>{this.props.product.price}</div>
        <div>{this.props.product.quantity}</div>
      </div>
    );
  }
}

Product.propTypes = {
  product: React.PropTypes.object.isRequired,
  withStock: React.PropTypes.bool,
};


Product.defaultProps = {
  withStock: false,
};