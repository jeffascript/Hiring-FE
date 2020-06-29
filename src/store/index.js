import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducers/login.js";
import taskReducer from "../reducers/tasks.js";
import errorMessage from "../reducers/error.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState={
    loggedInUser: {},
  
    tasks:{},
    message:null
};

const combReducer=combineReducers({
   loggedInUser: loginReducer,
   tasks:taskReducer,
   message:errorMessage
});

export default function configureStore() {
    return createStore(
      combReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }