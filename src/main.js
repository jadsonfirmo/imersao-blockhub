import Vue from "vue";
import App from "./App.vue";
import VueMask from "v-mask";

Vue.use(VueMask);

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueRouter from "vue-router";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueRouter);

import Home from "./components/Home";
import Persons from "./components/Persons";
import FullName from "./components/FullName";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: Home },
  { path: "/persons", name: "persons", component: Persons },
  { path: "/full-name", name: "fullName", component: FullName },
  { path: "*" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
