// importo due metodi con cui creo le rotte e integro il router di vuejs con il browser
import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";
import PagePortfolio from "./pages/PagePortfolio.vue";
import PageAboutUs from "./pages/PageAboutUs.vue";
import PageSingleProject from "./pages/PageSingleProject.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import PageContacts from "./pages/PageContacts.vue";
import PageThankYou from "./pages/PageThankYou.vue";
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
      path: "/portfolio:slug",
      name: "single-project",
      component: PageSingleProject,
    },
    {
      path: "/portfolio/:pathMatch(.*)*",
      name: "single-project-not-found",
      component: PageNotFound,
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: PageAboutUs,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: PageContacts,
    },
    {
      path: "/thank-you",
      name: "thank-you",
      component: PageThankYou,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "/not-found",
      component: PageNotFound,
    },
  ],
});

export { router };
