// importo due metodi con cui creo le rotte e integro il router di vuejs con il browser
import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";
import PagePortfolio from "./pages/PagePortfolio.vue";
import PageAboutUs from "./pages/PageAboutUs.vue";
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
    {
      path: "/aboutus",
      name: "aboutus",
      component: PageAboutUs,
    },
  ],
});

export { router };
