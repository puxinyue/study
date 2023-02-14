import { NextRequest } from "next/server";

// 可以拦截api请求，router切换，资源加载
export const middleware = (req: NextRequest) => {
  console.log("中间===》", req.url);
};

// 匹配器 匹配规则
export const config = {
  // (?!_next) 匹配不包含_next 路径的
  matcher: ["/((?!_next/static|api|favicon).*)"],
};
