/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 启用严格模式 咋开发环境会打印两次log
  env: {
    PORT: 9999,
  },
  // basePath:"/music"  url路径前缀
  images: {
    // 网络图片或外部资源需要配白名单
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.music.126.net",
      },
      {
        protocol: "https",
        hostname: "**.baidu.com",
      },
    ],
  },
};

module.exports = nextConfig;
