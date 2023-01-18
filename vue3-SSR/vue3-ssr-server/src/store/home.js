import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      count: 1000,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    // 异步数据
    //  async fun() {
    //       const data = await axios.get()
    //       this.resdata = data.data
    // }
  },
});
