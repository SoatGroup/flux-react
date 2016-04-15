import FluxAppDispatcher from '../dispatchers/fluxAppDispatcher';
import Constants from '../constants';

export default class StockAction {
  static increaseStock(stock) {
    const actionPayload = {
      type: Constants.FILL_STOCK,
      payload: stock,
    };
    FluxAppDispatcher.dispatch(actionPayload);
  }

  static decreaseStock(stock) {
    const actionPayload = {
      type: Constants.EMPTY_STOCK,
      payload: stock,
    };
    FluxAppDispatcher.dispatch(actionPayload);
  }
}
