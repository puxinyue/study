<template>
  <div>refresh</div>
  <div><button @click="handelRefresh">点击刷新</button></div>
</template>

<script setup>
import { ref } from "vue";
import { fetchHomeInfo } from "../service/home";
const baseURL =
  "http://rap2api.taobao.org/app/mock/273986/example/1608694987892";
const count = ref(1);

const { data } = await fetchHomeInfo({ count });

console.log("000000000=>", data);

watch(data, (newData) => {
  console.log("data22222==>", data);
});
//点击刷新时是在服务器端发起网络请求 客户端不会发起请求
// const { data, refresh } = useFetch(baseURL, {
//   method: "GET",
//   query: {
//     count,
//   },
// });
// console.log(data.value?.array);

const handelRefresh = () => {
  // refresh(); // 刷新请求

  // 如果请求的参数是响应式的 那么参数变化也会重新刷新请求
  count.value++;
};
</script>
