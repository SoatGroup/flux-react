import React from 'react';

export default class ItemProduct extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div className="line panel panel-default">
        {this.props.children}
        <div className="col-lg-2 btnBlock"><button onClick={this.props.onAdd} className="btn btn-primary">Add</button></div>
      </div>
    );
  }
}

ItemProduct.propTypes = {
  children: React.PropTypes.element,
  onAdd: React.PropTypes.func,
};
