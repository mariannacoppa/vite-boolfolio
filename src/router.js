// importo due metodi con cui creo le rotte e integro il router di vuejs con il browser
import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";
// creo il router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: PageHome,
    },
  ],
});

export { router };
