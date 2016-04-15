import Constants from '../constants';
import { Store } from 'flux/utils';
import initProduct from '../data.json';
const products = initProduct;

export default class BasketStore extends Store {
  getState() {
    return products;
  }

  __onDispatch(actionPayload) {
    console.log('hey from store');
    if (actionPayload.type === Constants.ADD_TO_BASKET) {
      // TODO: stock update from action
      this.__emitChange();
    } else if (actionPayload.type === Constants.REMOVE_FROM_BASKET) {
      // TODO: stock update from action
      this.__emitChange();
    }
  }
}