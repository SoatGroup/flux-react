import React from 'react';
import Dispatcher from '../dispatchers/fluxAppDispatcher';
import BasketStore from '../stores/basketStore';
import Basket from './basket';

export default class BasketContainer extends React.Component {
  constructor(props) {
    super(props);
    this.store = new BasketStore(Dispatcher);
    this.state = {
      products: this.store.getState(),
    };
  }

  componentDidMount() {
    this.listener = this.store.addListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  onChange() {
    this.setState({
      products: this.store.getState(),
    });
  }

  render() {
    return <Basket products={this.state.products} />;
  }
}
