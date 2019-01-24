import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import allReducers from "../reducers/allReducers";

/* eslint-disable no-underscore-dangle */
const configureStore = preloadedState =>
  createStore(
    allReducers,
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))    
  );
/* eslint-enable */

export default configureStore;
