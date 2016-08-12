import Constants from '../constants';
import Dispatcher from '../dispatcher/fluxAppDispatcher';
import EventEmmiter from 'events';
import initProduct from '../data.json';
const products = initProduct;

class ShelfStore extends EventEmmiter {

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  getState() {
    return products;
  }
}

const shelfStore = new ShelfStore();

shelfStore.token = Dispatcher.register((actionPayload) => {
  console.log('ShelfStore', actionPayload);
  const product = products.find(item => item.id === actionPayload.payload.id);
  if (actionPayload.type === Constants.FILL_STOCK) {
    product.quantity += 1;
    shelfStore.emitChange();
  } else if (actionPayload.type === Constants.EMPTY_STOCK) {
    product.quantity -= 1;
    shelfStore.emitChange();
  }
});

export default shelfStore;
