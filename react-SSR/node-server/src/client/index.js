import React from "react";
import reactDOM from "react-dom/client";
import App from "../../app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

// 需要激活的模式下挂载我们的应用
reactDOM.hydrateRoot(
  document.getElementById("root"),
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
