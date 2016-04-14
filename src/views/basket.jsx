import React from 'react';
import Product from './product';
import BasketProduct from './basketProduct';

export default class Basket extends React.Component {
  render() {
    const products = this.props.products.map(
      (product, index) =>
        <BasketProduct key={index}>
          <Product product={product} />
        </BasketProduct>
    );
    if (!products.length) {
      return null;
    }
    return (
      <div className="basket">
        {products}
      </div>
    );
  }
}

Basket.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
