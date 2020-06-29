import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducers/login.js";
import taskReducer from "../reducers/tasks.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState={
    loggedInUser: {},
    tasks:{}
};

const combReducer=combineReducers({
   loggedInUser: loginReducer,
   tasks:taskReducer
});

export default function configureStore() {
    return createStore(
      combReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }