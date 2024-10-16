// importo due metodi con cui creo le rotte e integro il router di vuejs con il browser
import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";
import PagePortfolio from "./pages/PagePortfolio.vue";
// creo il router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: PageHome,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PagePortfolio,
    },
  ],
});

export { router };
