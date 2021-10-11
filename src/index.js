import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const defaultState = {
  "statusLogin": false,
  "username": ""
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN_OKO":
      return {
        statusLogin: true,
        username: action.payload
      }
    case "LOGOUT_OK":
      return defaultState

    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);