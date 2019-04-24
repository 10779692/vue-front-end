<!-- Toolbar.vue -->

<template>
  <nav>
    <div class="navigation-menu">
      <div class="navigation-links">
        <!-- HomeGraphQL.vue -->
        <router-link to="/">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">Home</a>
          </v-btn>
        </router-link>
        <!-- ProductsGraphQL.vue -->
        <router-link to="/about-me">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">About Me</a>
          </v-btn>
        </router-link>
        <!-- ProductsCustomerGraphQL.vue -->
        <router-link to="/web-development">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">Web Development</a>
          </v-btn>
        </router-link>
        <!-- ProductsEmployeeGraphQL.vue -->
        <router-link to="/ux-design">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">UX Design</a>
          </v-btn>
        </router-link>
        <!-- HomeREST.vue -->
        <router-link to="/contact">
          <v-btn flat>
            <a style="color:#0dd16b;text-transform:lowercase;font-size:12px;">Contact</a>
          </v-btn>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style>
.navigation-menu {
  margin: 0 auto;
  background-color: #3a3a3a;
}
.navigation-links {
  display: flex;
  justify-content: center;
}
a {
  color: #ffffff;
  text-decoration: none;
}
</style>