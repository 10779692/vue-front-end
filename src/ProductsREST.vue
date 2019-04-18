<template>
  <div id="ProductsREST'">
    <div class="button-section">
      <h2>Click the button to get REST API data</h2>
      <button id="btn" class v-on:click="getProducts">Get Data</button>
    </div>
    <div v-for="products in products" :key="products.id">
      <v-container grid-list-xl>
        <v-layout>
          <v-flex>
            <v-card dark color="primary" style="padding: 25px;">
              <div>
                <h3>PRODUCT: {{ products.title }}</h3>
                <br>
                <p>ID: {{ products._id }}</p>
                <p>PRICE: ${{ products.price }}</p>
                <p>DESCRIPTION: {{ products.description }}</p>
                <br>
                <div class="field">
                  <label
                    class="label"
                  >To delete, confirm by inputting product id and then click delete.</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Id" name="deleteId" id="deleteId">
                  </div>
                </div>
                <br>
                <b-button id="button#1" @click="deleteProduct">Delete Product</b-button> &nbsp;
                
                <!-- <b-modal v-model="modalShow1">
                  <section class="section">
                    <div class="container">
                      <h2 class="is-size-2">Delete Product</h2>
                      <p>Confirm by inputting ID number.</p>
                      <hr>
                      <br>
                        <div class="field">
                          <label class="label">ID</label>
                          <div class="control">
                            <input
                              class="input"
                              type="text"
                              placeholder="Id"
                              name="_id"
                              id="_id"
                            >
                          </div>
                        </div>
                        <br>
                        <br>
                        <div class="field">
                          <div class="control">
                            <button class="button is-link" type="submit">Submit</button>
                          </div>
                        </div>
                      <br>
                      <br>
                    </div>
                  </section>
                </b-modal>-->

                <!-- This Is The Modal Section -->

                <b-button id="button#2" @click="modalShow = !modalShow">Edit Product</b-button>
                <b-modal v-model="modalShow">
                  <section class="section">
                    <div class="container">
                      <h2 class="is-size-2">Edit Product</h2>
                      <hr>
                      <br>
                      <form action="http://localhost:3000/products" method="POST">
                        <div class="field">
                          <label class="label">Name</label>
                          <div class="control">
                            <input
                              class="input"
                              type="text"
                              placeholder="Title"
                              name="title"
                              id="title"
                            >
                          </div>
                        </div>
                        <br>
                        <div class="field">
                          <label class="label">Price</label>
                          <div class="control">
                            <input
                              class="input"
                              type="text"
                              placeholder="Price"
                              name="price"
                              id="price"
                            >
                          </div>
                        </div>
                        <br>
                        <div class="field">
                          <label class="label">Description</label>
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
                        <br>
                        <div class="field">
                          <div class="control">
                            <button class="button is-link" type="submit">Submit</button>
                          </div>
                        </div>
                      </form>
                      <br>
                      <br>
                    </div>
                  </section>
                </b-modal>

                <!-- End Modal Section -->
              </div>
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
      loading: false,
      modalShow: false,
      modalShow1: false
    };
  },

  methods: {
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


    deleteProduct() {
      const productId = document.getElementById("deleteId").value;
      console.log(productId);
      return fetch(`https://vue-crud-server.herokuapp.com/products/delete/${productId}`, {
        method: "DELETE"
      })
      
        .then(result => {window.location.reload()})
    }
  }
};
</script>
<style scoped>
#button1 , #button2 {
  display: inline-block;
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
#btn-edit {
  background-color: darkgreen;
  padding: 10px;
  margin-right: 10px;
}
#btn-delete {
  background-color: red;
  padding: 10px;
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
  color: #000000 !important;
}
h2 {
  color: #000000 !important;
}
p {
  color: #000 !important;
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
.field button:hover {
  background-color: #149b3f;
}
</style>