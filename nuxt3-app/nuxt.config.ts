// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";
export default defineNuxtConfig({
  runtimeConfig: {
    // 运行时配置
    appKey: "abbbv",
    public: {
      baseURL: "123213", // server || client 里面都可以获取
    },
  },
  // 使用pinia/nuxt时候要配置
  modules: ["@pinia/nuxt"],
  // vite plugins
  // build
  build: {
    transpile: ["element-plus/es"],
  },
  vite: {
    plugins: [ElementPlus()],
  },
});
