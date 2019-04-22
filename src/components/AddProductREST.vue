<!-- /components/AddProductREST.vue -->

<template>
  <section class="section">
    <div class="container">
      <p>REST</p>
      <h1 class="is-size-2">Add a Product</h1>
      <hr>
      <br>
      <form action="https://vue-crud-server.herokuapp.com/products" method="POST">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Product Title" name="title" id="title">
          </div>
        </div>
        <br>
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input class="input" type="text" placeholder="Product Price" name="price" id="price">
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
            <input class="input" type="text" placeholder="Employee Name" name="employee" id="employee">
          </div>
        </div>
        <br>
        <div class="field">
          <div class="control">
            <!-- Submit Button -->
            <!-- <button class="button is-link" type="submit">Submit</button> -->
            <b-button id="button-submit2" type="submit">Add Product</b-button>
          </div>
        </div>
      </form>
      <br>
      <br>
    </div>
  </section>
</template>

<script>
</script>


<style scoped>
#button-submit2 {
  background-color: #14b448 !important;
  color: #fff;
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
}
</style>