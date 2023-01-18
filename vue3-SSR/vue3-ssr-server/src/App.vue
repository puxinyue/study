<template>
  <div style="border: 1px solid red">
    <div>vue366666</div>
    <div>{{ count }}</div>
    <button @click="handelAdd">+1</button>
    <div>
      <RouterLink to="/">
        <button>home</button>
      </RouterLink>
      <RouterLink to="/about">
        <button>about</button>
      </RouterLink>
    </div>
    <!-- 路由占位 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(100);
function handelAdd() {
  count.value++;
}
</script>
