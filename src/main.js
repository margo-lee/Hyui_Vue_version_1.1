import { createApp } from "vue";
import App from "./App.vue";
//import App from "./AppComponent.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
