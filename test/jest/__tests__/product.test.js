/* eslint-disable strict */
'use strict';
/* eslint-ensable strict */
jest.unmock('../../../src/views/product');

import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag,
} from 'react-addons-test-utils';
import Product from '../../../src/views/product';

describe('Product', () => {
  it('Should render product with name, price and stock', () => {
    const testedComponent = renderIntoDocument(
      <Product
          product={{}}
          withStock={true}
      />
    );
  });
});
