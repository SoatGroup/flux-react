import FluxAppDispatcher from '../dispatchers/FluxAppDispatcher';
import Constants from '../constants';

export default class StockAction {
  increaseStock(stock) {
    const actionPayload = {
      type: Constants.Actions.FILL_STOCK,
      payload: stock,
    };
    FluxAppDispatcher.dispatch(actionPayload);
  }

  decreaseStock(stock) {
    const actionPayload = {
      type: Constants.Actions.EMPTY_STOCK,
      payload: stock,
    };
    FluxAppDispatcher.dispatch(actionPayload);
  }
}
