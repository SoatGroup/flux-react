import React from 'react';

export default class BasketProduct extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div className="line panel panel-default">
        {this.props.children}
        <div className="col-lg-2 btnBlock">
        <button onClick={this.props.onDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

BasketProduct.propTypes = {
  children: React.PropTypes.element,
  onDelete: React.PropTypes.func,
};
