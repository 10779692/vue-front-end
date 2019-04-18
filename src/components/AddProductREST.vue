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
            <input class="input" type="text" placeholder="Title" name="title" id="title">
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
</template>

<script>
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