<!-- Toolbar.vue -->

<template>
  <nav>
    <div class="navigation-menu">
      <div class="navigation-links">
        <!-- HomeGraphQL.vue -->
        <router-link to="/">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">Add Product</a>
          </v-btn>
        </router-link>
        <!-- ProductsGraphQL.vue -->
        <router-link to="/products-graphql">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">Edit/Delete Products</a>
          </v-btn>
        </router-link>
        <!-- ProductsCustomerGraphQL.vue -->
        <router-link to="/products-customer-graphql">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">Products Customer View</a>
          </v-btn>
        </router-link>
        <!-- ProductsEmployeeGraphQL.vue -->
        <router-link to="/products-employee-graphql">
          <v-btn flat>
            <a style="color:#0ac7d8;text-transform:lowercase;font-size:12px;">Products Employee View</a>
          </v-btn>
        </router-link>
        <!-- HomeREST.vue -->
        <router-link to="/home-rest">
          <v-btn flat>
            <a style="color:#0dd16b;text-transform:lowercase;font-size:12px;">Add Product</a>
          </v-btn>
        </router-link>
        <!-- ProductsREST.vue -->
        <router-link to="/products-rest">
          <v-btn flat>
            <a style="color:#0dd16b;text-transform:lowercase;font-size:12px;">Edit/Delete Products</a>
          </v-btn>
        </router-link>
        <!-- ProductsCustomerREST.vue -->
        <router-link to="/products-customer-rest">
          <v-btn flat>
            <a style="color:#0dd16b;text-transform:lowercase;font-size:12px;">Products Customer View</a>
          </v-btn>
        </router-link>
        <!-- ProductsEmployeeREST.vue -->
        <router-link to="/products-employee-rest">
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