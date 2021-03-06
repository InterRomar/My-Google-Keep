import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer, /* preloadedState, */
  composeEnhancer(applyMiddleware(thunk))
);




