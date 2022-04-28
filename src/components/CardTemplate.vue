<template>
    <div class="col-md-2 card">
          <img
            v-bind:src="imagen"
            class="card-img-top"
            style="max-width: 50%; max-height: 50%"
          />
          <div class="card-body">
            <p class="card-text">{{message}}</p>
          </div>
        </div>
</template>

<script>
  export default {
      props:{
        message: {
              type: String,
              required: true
          },
        imagen: {
          type: String,
          required: ('/assets/images/')
        }
      }
  }
</script>

<style scoped>
.card {
  margin: 1em;
  padding: 1em;
  float: left;
}
.card-text {
  text-align: center;
  font-size: 0.7vw;
}
</style>