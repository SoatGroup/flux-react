import React from 'react';

export default class Product extends React.Component {
  render() {
    if (this.props.product === {}) {
      return null;
    }
    return (
      <div className="product col-lg-10">
        <h3 className="col-lg-12">{this.props.product.name}</h3>
        <div className="col-lg-6 price">{this.props.product.price}</div>
        <div className="col-lg-6 qty">{this.props.product.quantity}</div>
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