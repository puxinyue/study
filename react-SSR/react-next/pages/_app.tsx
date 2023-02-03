import "@/styles/globals.css";
import type { AppProps } from "next/app";

/**
 * 在这个页面可以做
 * @param 自定义布局layout
 * @param redux
 * @param Theme
 * @param 监听全局
 * @returns
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
