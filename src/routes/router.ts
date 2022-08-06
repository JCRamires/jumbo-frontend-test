import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Cities from "../pages/Cities.vue";
import City from "../pages/City.vue";
import Stores from "../pages/Stores.vue";
import Store from "../pages/Store.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cities", component: Cities },
  { path: "/cities/:cityName", component: City },
  { path: "/stores", component: Stores },
  { path: "/stores/:id", component: Store },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
