import { createApp } from "vue";
import App from "./App.vue";
//引入Element Plus插件与样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//配置element-plus国际化
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/es/locale/lang/zh-cn";
//svg图标配置代码
import "virtual:svg-icons-register";
//引入全局样式
import "@/styles/index.scss";

const app = createApp(App);
//配置element-plus国际化
app.use(ElementPlus, {
  locale: zhCn,
});
//引入自定义插件对象：注册整个项目全局组件
import gloablComponents from "@/components/index.ts"
app.use(gloablComponents)

app.mount("#app");
