<!-- App.vue -->

<template>
  <v-app>
    <v-content>
      <Toolbar/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


export default {
  name: "App",
  components: {
    Toolbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
