<!-- HomeREST.vue -->

<template>
  <v-app>
    <v-content>
      <!-- <add-product-r-e-s-t /> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import AddProductREST from "./components/AddProductREST.vue";

export default {
  name: "Home",
  components: {
    // AddProductREST
  },
  data() {
    return {
      //
    };
  }
};
</script>