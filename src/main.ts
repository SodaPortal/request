import { createApp } from "vue";
import Store from "./store";
import App from "./App.vue";
import { Totify } from "./notify/index";

Totify.init("RIGHT", "BOTTOM");
const app = createApp(App);
app.use(Store);
app.mount("#app");
