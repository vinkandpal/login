import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import authReducer from "./reducers/auth";
import username from "./reducers/username";
import password from "./reducers/password";
import { watchAuth } from "./sagas/index";

const rootReducer = combineReducers({
  auth : authReducer,
  user : username,
  password : password
});

const sagaMiddleware = createSagaMiddleware();

//TODO : use this below sort of Middlewares for logs, performance ,Amplitude and New relic
const middleware = store => {
  return next => {
    return action => {
      //console.log(" Dispatching Action", action);
      const result = next(action);
      //console.log("Next state", store.getState());
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleware, sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
//sagaMiddleware.run(watchUsernmae);
//sagaMiddleware.run(watchOrder);


const StoreProvider = props => (
  <Provider store={store}>{props.children}</Provider>
);

export default StoreProvider;
