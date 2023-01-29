import myRequest from "./index";

export const fetchHomeInfo = (params?: any) => {
  return myRequest.get("/example/1608694987892", params);
};
