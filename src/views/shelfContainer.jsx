import React from 'react';
import ShelfStore from '../stores/ShelfStore';
import Shelf from './Shelf';

export default class ShelfContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ShelfStore.getState(),
    };
  }

  componentDidMount() {
    ShelfStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    ShelfStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({
      products: ShelfStore.getState(),
    });
  }

  render() {
    return <Shelf products={this.state.products} />;
  }
}
