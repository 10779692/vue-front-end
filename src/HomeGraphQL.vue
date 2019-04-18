<template>
  <v-app>
    <v-content>
      <AddProductGraphQL/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AddProductGraphQL from "./components/AddProductGraphQL.vue";

export default {
  // name: "HomeGraphQL",
  components: {
    AddProductGraphQL
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
</style>