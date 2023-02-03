const express = require("express");
import ReactDOM from "react-dom/server";
import React from "react";
import App from "../../app.jsx";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../store";

const app = express();

// 静态页面部署
app.use(express.static("build"));

app.get("/", (req, res) => {
  const AppHtmlString = ReactDOM.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
     <div id="root">
      app6666
       ${AppHtmlString}
      </div>
      <script src="/client/client_bundle.js"></script>
  </body>
  </html>
  `);
});

app.listen(3006, () => {
  console.log("启动3006端口成功");
});
