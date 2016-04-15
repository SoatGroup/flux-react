import React from 'react';
import ShelfContainer from './views/shelfContainer';
import BasketContainer from './views/basketContainer';

export default class FluxApp extends React.Component {
  render() {
    return (<div className="app">
      <ShelfContainer />
      <BasketContainer />
    </div>);
  }
}
