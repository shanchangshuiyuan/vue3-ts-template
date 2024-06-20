import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log("hello world");
}
