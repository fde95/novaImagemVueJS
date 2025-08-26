import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Sobre from "../pages/SobreNos.vue";
import Servicos from "../pages/Servicos.vue";
import Contato from "../pages/Contato.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/sobre-nos", component: Sobre },
  { path: "/servicos", component: Servicos },
  { path: "/contato", component: Contato },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
