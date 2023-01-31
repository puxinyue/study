<template>
  <div>{{ counter }}</div>
  <div>{{ doubleCounter }}</div>
  <ElButton type="success" @click="() => mian.reset()">归0</ElButton>
  <ElButton type="primary" @click="() => mian.add()">cate加1</ElButton>
</template>

<script setup lang="ts">
import { ElButton } from "element-plus";
import { storeToRefs } from "pinia";
import { useMainStore } from "@/store/index";
const mian = useMainStore();
const { counter, doubleCounter, doubleCounterPlusOne } = storeToRefs(mian);
</script>
