import React from 'react';
import Product from './product';
import ItemProduct from './itemProduct';

class Basket extends React.Component {
  render() {
    const products = this.props.products.map(
      product =>
        <ItemProduct>
          <Product product={product} />
        </ItemProduct>
    );
    if (products.length) {
      return null;
    }
    return (
      <div className="shelf">
        {products}
      </div>
    );
  }
}

Basket.propTypes = {
  products: React.PropTypes.object.isRequired,
};
