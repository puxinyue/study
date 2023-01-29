import type { AsyncData, UseFetchOptions } from "nuxt/dist/app/composables";

type Method = "GET" | "POST" | "PUT" | "DELETE";

const BASE_URL = "http://rap2api.taobao.org/app/mock/273986/";

export interface IResultData<T> {
  code: number;
  data: T;
}

class myRequest {
  fetch<T = any>(
    url: string,
    method?: Method,
    data?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions = {
        baseURL: BASE_URL,
        method,
        ...options,
      };
      if (method === "GET") {
        newOptions.query = data;
      } else {
        newOptions.body = data;
      }
      useFetch(url, newOptions)
        .then((res) => {
          resolve(res as AsyncData<T, Error>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.fetch(url, "GET", params, options);
  }

  post<T>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.fetch(url, "POST", data, options);
  }

  put<T>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.fetch(url, "PUT", data, options);
  }

  delete<T>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.fetch(url, "DELETE", data, options);
  }
}

export default new myRequest();
