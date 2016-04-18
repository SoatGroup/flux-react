import React from 'react';

export default class BasketProduct extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div className="line">
        {this.props.children}
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

BasketProduct.propTypes = {
  children: React.PropTypes.element,
  onDelete: React.PropTypes.func,
};
