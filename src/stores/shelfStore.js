import Constants from '../constants';
import Dispatcher from '../dispatchers/fluxAppDispatcher';
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
  console.log(actionPayload);
  if (actionPayload.type === Constants.FILL_STOCK) {
    shelfStore.emitChange();
  }
});

export default shelfStore;
