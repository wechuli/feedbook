import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger];

const store = createStore(
  () => [],
  composeWithDevTools(applyMiddleware(...middlewares))
);


export default store;