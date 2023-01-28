// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 运行时配置
    appKey: "abbbv",
    public: {
      baseURL: "123213", // server || client 里面都可以获取
    },
  },
});
