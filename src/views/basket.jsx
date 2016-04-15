import React from 'react';
import Product from './product';
import BasketProduct from './basketProduct';
import BasketAction from '../actions/basketAction';

export default class Basket extends React.Component {
  render() {
    const products = this.props.products.map(
      (product, index) => {
        const sendDeleteAction = BasketAction.removeProduct.bind(this, product);
        return (<BasketProduct key={index} onDelete={sendDeleteAction}>
          <Product product={product} />
        </BasketProduct>);
      }
    );
    if (!products.length) {
      return null;
    }
    return (
      <div className="basket half-panel">
        {products}
      </div>
    );
  }
}

Basket.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
