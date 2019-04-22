<!-- ProductsGraphQL.vue -->

<template>
  <div id="ProductsGraphQL">
    <div class="button-section">
      <h2>Click the button to get Prisma GraphQL data</h2>
      <button id="btn" class v-on:click="getAllGraphql">Get Data</button>
    </div>
    <div v-for="item in myItem" :key="item.id">
      <v-container grid-list-xl>
        <v-layout>
          <v-flex>
            <!-- Card Starts Here -->
            <v-card dark color="#727272" style="padding: 25px;border: 3px solid #0ac7d8;">
              <div>
                <h3>PRODUCT: {{ item.name }}</h3>
                <br>
                <p>ID: {{ item.id }}</p>
                <p>PRICE: ${{ item.price }}</p>
                <p>DESCRIPTION: {{ item.desc }}</p>
                <p>LOCATION: {{ item.location }}</p>
                <p>EMPLOYEE: {{ item.employee }}</p>
                <hr>
                <div class="field">
                  <label
                    class="label"
                  >To delete, confirm by inputting product id and then click delete.</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Id" name="deleteId" id="deleteId">
                  </div>
                </div>
                <br>
                <!-- Delete Button -->
                <b-button id="button1" @click="deleteProduct(item.id)">Delete Product</b-button>&nbsp;
                <hr>
                <br>
                <div class="field">
                  <label class="label">To edit, please fill out the form.</label>
                </div>
                <br>
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" placeholder="Title" name="name" id="name">
                  </div>
                </div>
                <br>
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" placeholder="Price" name="price" id="price">
                  </div>
                </div>
                <br>
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Description"
                      name="desc"
                      id="desc"
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
                    <input class="input" type="text" placeholder="Employee" name="employee" id="employee">
                  </div>
                </div>
                <br>
                <!-- Update Button -->
                <b-button id="button2" @click="updateProduct(item.id)">Update Product</b-button>
              </div>
            </v-card>
            <!-- Card Ends Here -->
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "ProdutsGraphQL",
  data() {
    return {
      myItem: [],
      loading: false
    };
  },
  methods: {
    // Query Products
    getAllGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query {
              products {
                id
                name
                price
                desc
                location
                employee
              }
            }
          `
        })
        .then(res => {
          console.log(res.data.products);
          this.myItem = res.data.products;
        });
    },
    // Update Product
    updateProduct: function(id) {
      const name = document.getElementById("name").value;
      const price = parseInt(document.getElementById("price").value);
      const desc = document.getElementById("desc").value;
      const location = document.getElementById("location").value;
      const employee = document.getElementById("employee").value;
      console.log(price);
      console.log(id);
      this.$apollo
        .mutate({
          mutation: gql`
            mutation updateProduct(
              $id: ID
              $name: String
              $price: Int
              $desc: String
              $location: String
              $employee: String
            ) {
              updateProduct(
                data: { name: $name, price: $price, desc: $desc, location: $location, employee: $employee }
                where: { id: $id }
              ) {
                id
                name
                price
                desc
                location
                employee
              }
            }
          `,

          variables: {
            id,
            name,
            price,
            desc,
            location,
            employee
          }
        })
        .then(result => {
        window.location.reload();
      });
    },
    // Delete Product By Id
    deleteProduct: function(id) {
      console.log(id);
      this.$apollo
        .mutate({
          mutation: gql`
            mutation deleteProduct($id: ID) {
              deleteProduct(where: { id: $id }) {
                id
                name
                price
                desc
                location
                employee
              }
            }
          `,

          variables: {
            id
          }
        })
        // Functions as an auto-reload
        .then(result => {
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
.field button:hover {
  background-color: #149b3f;
}
</style>