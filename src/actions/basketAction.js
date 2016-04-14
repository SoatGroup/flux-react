import FluxAppDispatcher from '../dispatchers/FluxAppDispatcher';
import Constants from '../constants';

export default class BasketAction {
  addProduct(product) {
    const actionPayload = {
      type: Constants.Actions.ADD_TO_BASKET,
      payload: product,
    };
    FluxAppDispatcher.dispatch(actionPayload);
  }

  removeProduct(product) {
    const actionPayload = {
      type: Constants.Actions.REMOVE_TO_BASKET,
      payload: product,
    };
    FluxAppDispatcher.dispatch(actionPayload);
  }
}
