<!-- ProductsRest.vue -->

<template>
  <div id="ProductsREST'">
    <v-container grid-list-xl>
      <v-layout>
        <v-flex>
          <div class="button-section">
            <h2>Click the button to get REST API data</h2>
            <button id="btn" class v-on:click="getProducts">Get Data</button>
          </div>
          <br>
          <div class="field-1">
            <h2 class="label" style="font-weight: bold;">Edit Product</h2>
          </div>
          <br>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Product Title" name="title" id="title">
            </div>
          </div>
          <br>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Product Price" name="price" id="price">
            </div>
          </div>
          <br>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Description"
                name="description"
                id="description"
              >
            </div>
          </div>
          <br>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Location" name="location" id="location">
            </div>
          </div>
          <br>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Employee Name"
                name="employee"
                id="employee"
              >
            </div>
          </div>
          <br>
        </v-flex>
      </v-layout>
    </v-container>

    <div v-for="products in products" :key="products.id">
      <v-container grid-list-xl>
        <v-layout>
          <v-flex>
            <!-- Card Begins Here -->
            <v-card dark color="#727272" style="padding: 25px; border: 3px solid #0dd16b;">
              <div>
                <h3>PRODUCT: {{ products.title }}</h3>
                <br>
                <p>ID: {{ products._id }}</p>
                <p>PRICE: ${{ products.price }}</p>
                <p>DESCRIPTION: {{ products.description }}</p>
                <p>LOCATION: {{ products.location }}</p>
                <p>EMPLOYEE: {{ products.employee }}</p>
                <hr>
                <div class="field">
                  <label class="label" style="font-weight: bold;">Delete Product</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Confirm With Product Id"
                      name="deleteId"
                      id="deleteId"
                    >
                  </div>
                </div>
                <br>
                <!-- Delete Button -->
                <b-button id="button1" @click="deleteProduct(products._id)">Delete Product</b-button>&nbsp;
                <hr>
                <br>
                <!-- Update Button -->
                <b-button id="button2" @click="updateProduct(products._id)">Update Product</b-button>
              </div>
              <!-- Card Ends Here -->
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ProductsREST",
  data() {
    return {
      products: [],
      loading: false
    };
  },
  methods: {
    // Get All Products
    getProducts: function() {
      this.loading = true;
      axios.get("https://vue-crud-server.herokuapp.com/products").then(
        response => {
          this.loading = false;
          this.products = response.data;
        },
        error => {
          this.loading = false;
        }
      );
    },
    // Update Product
    updateProduct: function(productId) {
      const title = document.getElementById("title").value;
      const price = document.getElementById("price").value;
      const description = document.getElementById("description").value;
      const location = document.getElementById("location").value;
      const employee = document.getElementById("employee").value;
      const updatedProductData = {
        title,
        price,
        description,
        location,
        employee
      };
      console.log(updatedProductData);
      fetch(`https://vue-crud-server.herokuapp.com/products/${productId}`, {
        method: "PUT",
        // mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProductData)
      })
        .then(result => {
          console.log(result);
        })
        .then(result => {
        window.location.reload();
      });
        
    },
    // Delete Product By Id
    deleteProduct: function(productId) {
      console.log(productId);
      return fetch(
        `https://vue-crud-server.herokuapp.com/products/delete/${productId}`,
        {
          method: "DELETE"
        }
        // Functions as an auto-reload
      ).then(result => {
        window.location.reload();
      });
    }
  }
};
</script>
<style scoped>
input,
select {
  color: #3a3a3a;
}
#button1,
#button2 {
  display: inline-block;
}
#button1 {
  background-color: #ff0000 !important;
  color: #fff;
}
#button2 {
  background-color: #14b448 !important;
  color: #fff;
}
.button-section {
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 50px;
}
.cards {
  background: #f5f5f5;
  height: 400px;
}
.cards:hover {
  transform: translateY(-0.5em);
  background: #ebebeb;
}
.cards {
  column-count: 1;
  column-gap: 1em;
  margin-top: 70px;
}
.field input {
  background-color: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  width: 100%;
}
.field label {
  font-size: 18px;
  color: #fff !important;
}
h2 {
  color: #000000 !important;
}
p {
  color: #fff !important;
}
.field button {
  background-color: #14b448;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;
  font-size: 18px;
}
.field-1 h2 {
  color: #000000;
}
</style>