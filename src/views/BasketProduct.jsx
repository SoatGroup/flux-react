import React from 'react';

class BasketProduct extends React.Component {
  render() {
    if (!this.props.child) {
      return null;
    }
    return (
      <div>
        {this.props.child}
        <button onClick={() => {}}>Delete</button>
      </div>
    );
  }
}

BasketProduct.propTypes = {
  child: React.PropTypes.element,
};
