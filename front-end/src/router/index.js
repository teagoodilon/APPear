
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import SideBarView from "@/views/SideBarView.vue";
import Cases from "@/views/Cases.vue";
import Perdidos from "@/views/Perdidos.vue";
import Encontrados from "@/views/Encontrados.vue";
import Buscar from "@/views/Buscar.vue";
import MeusItens from "@/views/MeusItens.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dash",
    name: "Dashboard",
    component: SideBarView,
    redirect: '/dash/tabela',
    children: [
      {
        path: "/dash/cases",
        name: "Cases",
        component: Cases,
      },
      {
        path: "/dash/perdidos",
        name: "Perdidos",
        component: Perdidos,
      },
      {
        path: "/dash/encontrados",
        name: "Encontrados",
        component: Encontrados,
      },
      {
        path: "/dash/buscar",
        name: "Buscar",
        component: Buscar,
      },
      {
        path: "/dash/meusItens",
        name: "MeusItens",
        component: MeusItens,
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
