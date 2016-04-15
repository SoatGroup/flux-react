import FluxAppDispatcher from '../dispatchers/fluxAppDispatcher';
import Constants from '../constants';

export default class BasketAction {
  static addProduct(product) {
    const actionPayload = {
      type: Constants.ADD_TO_BASKET,
      payload: product,
    };
    FluxAppDispatcher.dispatch(actionPayload);
  }

  static removeProduct(product) {
    const actionPayload = {
      type: Constants.REMOVE_FROM_BASKET,
      payload: product,
    };
    FluxAppDispatcher.dispatch(actionPayload);
  }
}
