// 可以全局共享数据
export default function () {
  return useState(() => {
    return {
      counter: 100,
      name: "xiaomi",
    };
  });
}
