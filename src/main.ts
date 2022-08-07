import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { router } from "./routes/router";
import { key, store } from "./store/store";

createApp(App).use(store, key).use(router).mount("#app");
