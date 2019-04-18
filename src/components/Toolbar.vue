<template>
  <nav>
    <div class="navigation-menu">
      <div class="navigation-links">
        <router-link to="/">
          <v-btn flat>
            <a style="color:#ffffff;">Home GraphQL</a>
          </v-btn>
        </router-link>
        <router-link to="/productsgraphql">
          <v-btn flat>
            <a style="color:#ffffff;">View Products GraphQL</a>
          </v-btn>
        </router-link>
        <router-link to="/homerest">
          <v-btn flat>
            <a style="color:#ffffff;">Home REST</a>
          </v-btn>
        </router-link>
        <router-link to="/productsrest">
          <v-btn flat>
            <a style="color:#ffffff;">View Products REST</a>
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