/*
 * @Description:
 * @version: 0.0.1
 * @Author: yulinZ
 * @LastEditTime: 2023-06-16 13:58:31
 */
import { useContext } from "vite-ssr";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { ApiBase } from "@/api/config";
import axios from "axios";
import { Http2Server } from "http2";

export async function getViewInitData(
  url: string,
  method: string = "get",
  params: object = {}
) {
  const { initialState } = useContext();
  // 这只是一个唯一值，这里直接取路由的名称，也可以直接自定义，如：view-about 或者 component-helloworld
  const { name } = useRoute();
  const state = ref(initialState[name as string] || null);

  if (!state.value) {
    let res: any = null;
    switch (method) {
      case "get" || "GET":
        res = await axios.get(ApiBase + url);
        break;
      case "post" || "POST":
        res = await axios.post(ApiBase + url, params);
        break;
    }

    if (res.status == 200 && res.data.code == 200) {
      // 成功
      state.value = res.data.data;
    } else {
      if (!import.meta.env.SSR) {
        // 客户端报错提示
      } else {
        // 服务端打印错误日志
        console.log(res.data.message);
      }
    }
    // SSR需要将state的值赋值给initialState，这样任何地方都可以直接调用这个值
    // 如果你不需要在除了调用该方法的地方使用初始化数据，则可以不需要写这段代码
    if (import.meta.env.SSR && state.value != null) {
      initialState[name as string] = state.value;
    }
  }

  return state;
}

export function getData() {
  return getViewInitData("/blogApi/article?total=10&page=1&pageSize=16");
}

export function getClass() {
  return getViewInitData("/blogApi/group");
}

export function getArticleDetils(id: string) {
  return getViewInitData("/blogApi/article/" + id);
}
