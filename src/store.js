import { reactive } from "vue";
export const store = reactive({
  baseURL: "http://127.0.0.1:8000/api",
  menuItems: [
    {
      name: "homepage",
      label: "Home",
    },
    {
      name: "portfolio",
      label: "Portfolio",
    },
    {
      name: "aboutus",
      label: "Chi siamo",
    },
    {
      name: "contacts",
      label: "Contatti",
    },
  ],
});
