<template>
  <router-view/>
</template>



<script>
import {mapActions} from 'vuex'
export default {
  methods: {
...mapActions(['leerToken', 'cerrarSesion'])

  },

created(){
  this.leerToken()
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
