import React from 'react';
import Product from './product';
import ItemProduct from './itemProduct';
import BasketAction from '../actions/basketAction';
import StockAction from '../actions/stockAction';
import { cloneDeep } from 'lodash';

export default class Shelf extends React.Component {
  render() {
    const products = this.props.products.map(
      (product, index) => {
        const addActions = ((product) => {
          StockAction.decreaseStock(product);
          BasketAction.addProduct(product);
        }).bind(this, cloneDeep(product));
        return (<ItemProduct key={index} onAdd={addActions}>
          <Product product={product} withStock={true} />
        </ItemProduct>);
      }
    );
    if (!products.length) {
      return null;
    }
    return (
      <div className="shelf col-lg-6">
        <h2>Product list</h2>
        {products}
      </div>
    );
  }
}

Shelf.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
