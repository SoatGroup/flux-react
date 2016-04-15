import React from 'react';

export default class ItemProduct extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div className="line">
        {this.props.children}
        <button onClick={this.props.onAdd}>Add</button>
      </div>
    );
  }
}

ItemProduct.propTypes = {
  children: React.PropTypes.element,
  onAdd: React.PropTypes.func,
};
