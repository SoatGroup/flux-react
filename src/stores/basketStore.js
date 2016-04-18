import Constants from '../constants';
import { Store } from 'flux/utils';
import { remove } from 'lodash';
const products = [];

export default class BasketStore extends Store {
  getState() {
    return products;
  }

  __onDispatch(actionPayload) {
    console.log('BasketStore', actionPayload);
    if (actionPayload.type === Constants.ADD_TO_BASKET) {
      const product = products.find(item => item.id === actionPayload.payload.id);
      if (product) {
        // already in basket
        product.quantity += 1;
      } else {
        // new in basket
        const newProduct = actionPayload.payload;
        newProduct.quantity = 1;
        products.push(newProduct);
      }
      this.__emitChange();
    } else if (actionPayload.type === Constants.REMOVE_FROM_BASKET) {
      const product = products.find(item => item.id === actionPayload.payload.id);
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        // delete from basket
        remove(products, item => item.id === product.id);
      }
      this.__emitChange();
    }
  }
}
