import React from 'react';

class ItemProduct extends React.Component {
  render() {
    if (!this.props.child) {
      return null;
    }
    return (
      <div>
        {this.props.child}
        <button onClick={() => {}}>Add</button>
      </div>
    );
  }
}

ItemProduct.propTypes = {
  child: React.PropTypes.element,
};
