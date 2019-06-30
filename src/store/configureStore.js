import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import resultReducer from '../reducers/result';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    result: resultReducer 
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;