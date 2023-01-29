<template>
  <div>login</div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/homeInfo");
console.log(data.value?.data);
const { data: login } = await useFetch("/api/login", {
  method: "POST",
  body: {
    name: "admin",
    possWorld: "12345",
  },
});
// const cookie = useCookie("token", { maxAge: 10 }); // 10秒会自动删除
// cookie.value = "666666";
console.log(login.value?.data);
</script>
