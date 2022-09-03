
import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Login from "@/views/Login.vue";
import SideBarView from "@/views/SideBarView.vue";
import Cases from "@/views/Cases.vue";
import Perdidos from "@/views/Perdidos.vue";
import Encontrados from "@/views/Encontrados.vue";
import Buscar from "@/views/Buscar.vue";
import Aprovar from "@/views/Aprovar.vue";
import Cadastrados from "@/views/Cadastrados.vue";
import EditarCases from "@/views/EditarCases.vue";
import NovoAdmin from "@/views/NovoAdmin.vue";
import Devolvidos from "@/views/Devolvidos.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

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
        path: "/dash/aprovar",
        name: "Aprovar",
        component: Aprovar,
      },
      {
        path: "/dash/cadastrados",
        name: "Cadastrados",
        component: Cadastrados,
      },
      {
        path: "/dash/editar-case",
        name: "EditarCase",
        component: EditarCases,
      },
      {
        path: "/dash/novo-admin",
        name: "NovoAdmin",
        component: NovoAdmin,
      },
      {
        path: "/dash/devolvidos",
        name: "Devolvidos",
        component: Devolvidos,
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
