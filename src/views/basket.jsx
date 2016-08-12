import React from 'react';
import Product from './product';
import BasketProduct from './basketProduct';
import BasketAction from '../actions/basketAction';
import StockAction from '../actions/stockAction';
import { cloneDeep } from 'lodash';

export default class Basket extends React.Component {

  triggerActions(product) {
    BasketAction.removeProduct(product);
    StockAction.increaseStock(product);
  }

  render() {
    const products = this.props.products.map(
      (product, index) =>
        // cloneDeep to have a separate instance of product in emitted action
        <BasketProduct key={index} onDelete={this.triggerActions.bind(this, cloneDeep(product))}>
          <Product product={product} />
        </BasketProduct>
    );
    if (!products.length) {
      return null;
    }
    return (
      <div className="basket col-lg-6">
        <h2>My basket</h2>
        {products}
      </div>
    );
  }
}

Basket.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
