import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import store from "./store";

import "./assets/scss/main.scss";
import { initApp } from "./store/reducer/auth/actions.js";

store.dispatch(initApp());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
