import React from 'react';
import Shelf from './views/shelf';
import Basket from './views/basket';

export default class FluxApp extends React.Component {
  render() {
    return (<div className="app">
      <Shelf />
      <Basket />
    </div>);
  }
}