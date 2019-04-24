// main.js

import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomeGraphQL from "./HomeGraphQL.vue";
import ProductsGraphQL from "./ProductsGraphQL.vue";
import ProductsCustomerGraphQL from "./ProductsCustomerGraphQL.vue";
import ProductsEmployeeGraphQL from "./ProductsEmployeeGraphQL.vue";
import HomeREST from "./HomeREST.vue";
import ProductsREST from "./ProductsREST.vue";
import ProductsCustomerREST from "./ProductsCustomerREST.vue";
import ProductsEmployeeREST from "./ProductsEmployeeREST.vue";
import { createProvider } from "./vue-apollo";
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.use(VueRouter);

// Routes for /components/Toolbar.vue
const routes = [
  { path: "/", component: HomeGraphQL },
  { path: "/products-graphql", component: ProductsGraphQL },
  { path: "/products-customer-graphql", component: ProductsCustomerGraphQL },
  { path: "/products-employee-graphql", component: ProductsEmployeeGraphQL },
  { path: "/home-rest", component: HomeREST },
  { path: "/products-rest", component: ProductsREST },
  { path: "/products-customer-rest", component: ProductsCustomerREST },
  { path: "/products-employee-rest", component: ProductsEmployeeREST }
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
