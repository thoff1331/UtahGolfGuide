
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import LandingPage from './components/landingPage'

ReactDOM.render(
  <Provider store={store}>
    <LandingPage />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();