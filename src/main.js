// main.js

import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import AboutMe from "./AboutMe.vue";
import WebDevelopment from "./WebDevelopment.vue";
import UXdesign from "./UXdesign.vue";
import Contact from "./Contact.vue";
// import { createProvider } from "./vue-apollo";

Vue.use(VModal)
Vue.use(VueRouter);

// Routes for /components/Toolbar.vue
const routes = [
  { path: "/", component: Home },
  { path: "/about-me", component: AboutMe },
  { path: "/web-development", component: WebDevelopment },
  { path: "/ux-design", component: UXdesign },
  { path: "/contact", component: Contact }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  apolloProvider: createProvider(),
  router
}).$mount("#app");
