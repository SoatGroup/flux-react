import FluxAppDispatcher from '../dispatcher/fluxAppDispatcher';
import Constants from '../constants';

export default class StockAction {
  static increaseStock(stock) {
    const increaseStockActionObject = {
      type: Constants.FILL_STOCK,
      payload: stock,
    };
    FluxAppDispatcher.dispatch(increaseStockActionObject);
  }

  static decreaseStock(stock) {
    const decreaseStockActionObject = {
      type: Constants.EMPTY_STOCK,
      payload: stock,
    };
    FluxAppDispatcher.dispatch(decreaseStockActionObject);
  }
}
