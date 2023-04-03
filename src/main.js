import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.scss";
import App from "./App.vue";
import CardBoard from "./components/CardBoard.vue";
import CardDetail from "./components/CardDetail.vue";
const routes = [
  { path: "/", name: "CardBoard", component: CardBoard },
  { path: "/:id", name: "CardDetail", component: CardDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
