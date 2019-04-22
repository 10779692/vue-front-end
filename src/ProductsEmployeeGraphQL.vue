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
            <v-card dark color="#727272" style="padding: 25px;border: 3px solid #0ac7d8;">
              <div>
                <h3>PRODUCT: {{ item.name }}</h3>
                <br>
                <p>PRICE: ${{ item.price }}</p>
                <p>DESCRIPTION: {{ item.desc }}</p>
                <p>LOCATION: {{ item.location }}</p>
                <p>EMPLOYEE: {{ item.employee }}</p>
              </div>
            </v-card>
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
    getAllGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query {
              products {
                
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