//自己编写的接口
export default defineEventHandler(async (event) => {
  //   const query = getQuery(event);
  const body = await readBody(event);
  console.log("body", body);
  return {
    code: 200,
    data: {
      name: "zhangs",
      age: 20,
    },
  };
});
