<template>
  <div>
    <h3>hellow world</h3>
  </div>
</template>

<script setup>
// 判断代码运行环境
if (process.server) {
  //运行在服务端
  console.log("运行在 server");
  const runTimeConfig = useRuntimeConfig();
  console.log(runTimeConfig.appKey);
}
// 运行在客户端
if (process.client) {
  console.log("运行在 client");
  const runTimeConfig = useRuntimeConfig();
  console.log(runTimeConfig.public.baseURL);
}
</script>
