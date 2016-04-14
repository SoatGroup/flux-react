import React from 'react';
import Shelf from './views/shelf';
import Basket from './views/basket';
import products from './data.json';

export default class FluxApp extends React.Component {
  render() {
    return (<div className="app">
      <Shelf products={products} />
      <Basket products={products} />
    </div>);
  }
}
