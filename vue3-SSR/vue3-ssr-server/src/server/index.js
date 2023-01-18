let express = require("express");
let server = express();
import createApp from "../app";
import { renderToString } from "@vue/server-renderer";
import createRouter from "../router";
//内存路由=>在node中使用
import { createMemoryHistory } from "vue-router";
import { createPinia } from "pinia";

server.use(express.static("build"));

server.get("/*", async (req, res) => {
  let app = createApp();
  //app 路由插件
  const router = createRouter(createMemoryHistory());
  app.use(router);
  await router.push(req.url || "/");
  await router.isReady(); // 等待路由加载完成

  //创建pinia
  const pinia = createPinia();
  app.use(pinia);

  let appStringHtml = await renderToString(app);

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
                <div>server app</div>
                <div id="app">${appStringHtml}</div>
                <script src="/client/client_bundle.js"></script>
            </body>
        </html>
    `);
});

server.listen(3001, () => {
  console.log("start listen prots 3001");
});
