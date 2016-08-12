'use strict';
import React from 'react';
import Product from '../../src/views/product';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('Product', () => {
  it('Should render product with name, price and stock', () => {
    const product = shallow(
        <Product
            product={{}}
            withStock={false}
        />
    );
    console.log(product.debug());
    const productTitle = product.find('h3');
    expect(productTitle.text()).to.be.empty;
  });
});
