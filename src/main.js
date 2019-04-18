import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomeGraphQL from "./HomeGraphQL.vue";
import ProductsGraphQL from "./ProductsGraphQL.vue";
import HomeREST from "./HomeREST.vue";
import ProductsREST from "./ProductsREST.vue";
import { createProvider } from "./vue-apollo";
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomeGraphQL },
  { path: "/productsgraphql", component: ProductsGraphQL },
  { path: "/homerest", component: HomeREST },
  { path: "/productsrest", component: ProductsREST }
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
