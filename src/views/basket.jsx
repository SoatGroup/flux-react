import React from 'react';
import Product from './product';
import BasketProduct from './basketProduct';

class Basket extends React.Component {
  render() {
    const products = this.props.products.map(
      product =>
        <BasketProduct>
          <Product product={product} />
        </BasketProduct>
    );
    if (products.length) {
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
  products: React.PropTypes.object.isRequired,
};
