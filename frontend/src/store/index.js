import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import DrawingReducer from './reducers/DrawingReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  drawing: DrawingReducer,
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store

