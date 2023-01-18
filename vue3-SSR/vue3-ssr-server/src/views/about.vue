<template>
  <div style="border: 1px solid blue; margin: 12px">
    <h3>about</h3>
    <div>{{ count }}</div>
    <button @click="handeladdd">ADD+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "../store/home";
const homrStore = useHomeStore();
const { count } = storeToRefs(homrStore);
// const count = ref(300);
function handeladdd() {
  count.value++;
}
</script>
