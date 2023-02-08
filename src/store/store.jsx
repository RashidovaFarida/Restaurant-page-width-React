
// store.js

import { createStore } from 'redux';
import wishlistReducer from './reducers';

const store = createStore(wishlistReducer);

export default store;