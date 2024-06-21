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

const app = createApp(App);
//配置element-plus国际化
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(ElementPlus);
app.mount("#app");
