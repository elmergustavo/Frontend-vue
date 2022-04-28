<template>
  <div>
  <b-card
  >
    <b-card-body>
      <b-card-title>{{name_tutor}}</b-card-title>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>{{curso1}}</b-list-group-item>
      <b-list-group-item>{{curso2}}</b-list-group-item>
    </b-list-group>
  </b-card>
</div> 
</template>

<script>
  export default {
    props:{
      name_tutor: {
        type: String,
        required: true
      },
      curso1: {
        type: String,
        required: true
      },
      curso2: {
        type: String,
        required: true
      },
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
  font-size: 30vw;
}
</style>