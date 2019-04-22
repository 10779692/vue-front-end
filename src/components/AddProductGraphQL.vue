<template>
  <section class="section">
    <div class="container">
      <p>GraphQL</p>
      <h1 class="is-size-2">Add a Product</h1>
      <hr>
      <br>
      <form>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name" name="name" id="name">
          </div>
        </div>
        <br>
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input class="input" type="text" placeholder="Price" name="price" id="price">
          </div>
        </div>
        <br>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input class="input" type="text" placeholder="Description" name="desc" id="desc">
          </div>
        </div>
        <br>
        <div class="field">
          <label class="label">Location</label>
          <div class="control">
            <input class="input" type="text" placeholder="Location" name="location" id="location">
          </div>
        </div>
        <br>
        <div class="field">
          <label class="label">Employee</label>
          <div class="control">
            <input class="input" type="text" placeholder="Employee" name="employee" id="employee">
          </div>
        </div>
        <br>
        <br>
        <div class="field">
          <div class="control">
            <button class="button is-link" @click="createProduct">Submit</button>
          </div>
        </div>
      </form>
      <br>
      <br>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {};
  },
  methods: {
    createProduct() {
      const name = document.getElementById("name").value;
      const price = parseInt(document.getElementById("price").value);
      const desc = document.getElementById("desc").value;
      const location = document.getElementById("location").value;
      const employee = document.getElementById("employee").value;
      console.log(typeof price);
      this.$apollo
        .mutate({
          mutation: gql`
            mutation createProduct(
                $name: String
                $price: Int
                $desc: String
                $location: String
                $employee: String
                ) {
                    createProduct(
                        data: {
                            name: $name
                            price: $price
                            desc: $desc
                            location: $location
                            employee: $employee
                        }
                    ) {
                        name
                        price
                        desc
                        location
                        employee
                    }
                }
                `,
                
          variables: {
            name: name,
            price: price,
            desc: desc,
            location: location,
            employee: employee
          }
        })
        .then(result => {
        window.location.reload();
      });
    }
  }
};
</script>

<style scoped>
.field input {
  background-color: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  width: 100%;
}
.field label {
  font-size: 18px;
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