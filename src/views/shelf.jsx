import React from 'react';
import Product from './product';
import ItemProduct from './itemProduct';
import StockAction from '../actions/stockAction';

export default class Shelf extends React.Component {
  render() {
    const products = this.props.products.map(
      (product, index) => {
        const sendStockAction = StockAction.increaseStock.bind(this, product);
        return (<ItemProduct key={index} onAdd={sendStockAction}>
          <Product product={product} withStock={true} />
        </ItemProduct>);
      }
    );
    if (!products.length) {
      return null;
    }
    return (
      <div className="shelf half-panel">
        {products}
      </div>
    );
  }
}

Shelf.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
