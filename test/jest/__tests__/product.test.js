'use strict';
jest.unmock('../../../src/views/product');

import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import Product from '../../../src/views/product';

describe('Product', () => {
  it('Should render product with name, price and stock', () => {
    const testedComponent = renderIntoDocument(
      <Product
        product={{}}
        withStock={false}
      />
    );
    const productTitle = findRenderedDOMComponentWithTag(testedComponent, 'h3');
    expect(productTitle.textContent).toEqual('');
  });
});
