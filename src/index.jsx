// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Reducers
import messagesReducer from "./reducers/messages_reducer";
import selectedReducer from "./reducers/selected_reducer";
import identityReducer from "./reducers/identity_reducer";

// initial State

const initialState = {
  channels: ["general", "react", "paris"],
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }],
  selectedChannel: "general",
  currentUser: "thomas"
};

// State and reducers
const reducers = combineReducers({
  channels: identityReducer,
  messages: messagesReducer,
  selectedChannel: selectedReducer,
  currentUser: identityReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(

  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
