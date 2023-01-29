<template>
  <div>home</div>
</template>

<script setup lang="ts">
const baseURL =
  "http://rap2api.taobao.org/app/mock/273986/example/1608694987892";

// 这种方式 服务费和客户端都会请求一次
// $fetch(baseURL, { method: "GET" }).then((res) => {
//   console.log(res);
// });

// 第一个参数必须是唯一的  在刷新的时候减少一次客户端的请求
// const { data }: any = await useAsyncData(`homeinfo`, () => {
//   return $fetch(baseURL, { method: "GET" });
// });
// console.log(data.value?.data);

//简写 useFetch默认会阻塞页面路由渲染
const { data }: any = await useFetch(baseURL, {
  //响应拦截
  onResponse({ request, response, options }) {},
  onRequest({ request, options }) {
    options.headers = {
      token: "XXXXXX",
    };
  },
  lazy: true, // lazy为true时不会柱塞导航渲染 也可以直接用 useLazyFetch
});

// 确保一点能拿到data数据
watch(data, (newData) => {
  console.log("data==>", data);
});

console.log(data.value.array);

onMounted(() => {
  console.log("================1");
});
</script>
