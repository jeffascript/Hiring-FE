import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducers/login.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState={
    loggedInUser: {}
};

const combReducer=combineReducers({
   loggedInUser: loginReducer
});

export default function configureStore() {
    return createStore(
      combReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }