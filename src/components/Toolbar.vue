<template>
  <nav>
    <div class="navigation-menu">
      <div class="navigation-links">
        <router-link to="/">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">Add Product</a>
          </v-btn>
        </router-link>
        <router-link to="/productsgraphql">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">Products</a>
          </v-btn>
        </router-link>
        <router-link to="/homerest">
          <v-btn flat>
            <a style="color:#0dd16b;text-transform:lowercase;font-size:12px;">Add Product</a>
          </v-btn>
        </router-link>
        <router-link to="/productsrest">
          <v-btn flat>
            <a style="color:#0dd16b;text-transform:lowercase;font-size:12px;">Edit/Delete Products</a>
          </v-btn>
        </router-link>
        <router-link to="/products-simplified">
          <v-btn flat>
            <a style="color:#0dd16b;text-transform:lowercase;font-size:12px;">Products Customer View</a>
          </v-btn>
        </router-link>
        <router-link to="/products-employee">
          <v-btn flat>
            <a style="color:#0dd16b;text-transform:lowercase;font-size:12px;">Products Employee View</a>
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