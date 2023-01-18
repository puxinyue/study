import { createApp } from "vue";
import App from "../App.vue";
import createRouter from "../router";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const app = createApp(App);

const router = createRouter(createWebHistory());
app.use(router);

// 安装pinia
const pinia = createPinia();
app.use(pinia);

//等待路由加载完毕在挂载
router.isReady().then(() => {
  //spa
  app.mount("#app");
});
