import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise';

import general from '../ui/general/reducers';

const combinedReducers = combineReducers({
  general,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  {},
  composeEnhancers(
    applyMiddleware(promise, thunk)
  )
);

window.dispatch = store.dispatch;
window.store = store.getState;

export default store;
