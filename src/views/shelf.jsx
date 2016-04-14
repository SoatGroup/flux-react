import React from 'react';
import Product from './product';
import ItemProduct from './itemProduct';

export default class Shelf extends React.Component {
  render() {
    const products = this.props.products.map(
      (product, index) =>
        <ItemProduct key={index}>
          <Product product={product} />
        </ItemProduct>
    );
    if (!products.length) {
      return null;
    }
    return (
      <div className="shelf">
        {products}
      </div>
    );
  }
}

Shelf.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
