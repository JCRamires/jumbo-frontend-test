import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { jumboStores, key } from "./stores/jumboStores";
import { router } from "./routes/router";

const app = createApp(App);
app.use(jumboStores, key);
app.use(router);
app.mount("#app");
