import FluxAppDispatcher from '../dispatcher/fluxAppDispatcher';
import Constants from '../constants';

export default class BasketAction {
  static addProduct(product) {
    const addBasketActionObject = {
      type: Constants.ADD_TO_BASKET,
      payload: product,
    };
    FluxAppDispatcher.dispatch(addBasketActionObject);
  }

  static removeProduct(product) {
    const removeBasketActionObject = {
      type: Constants.REMOVE_FROM_BASKET,
      payload: product,
    };
    FluxAppDispatcher.dispatch(removeBasketActionObject);
  }
}
