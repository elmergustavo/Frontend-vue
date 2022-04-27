<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <form @submit.prevent="login(usuario)">
      <input type="email" placeholder="email" v-model="usuario.email" />
      <input type="password" placeholder="email" v-model="usuario.password" />

      <button type="submit">Registrar</button>
    </form>
    {{ usuario }}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
export default {
  data() {
    return {
      usuario: {
        email: "gustavo@gmail.com",
        password: "123456789",
      },
    };
  },

  methods: {
    ...mapActions(["login"]),
  },
};
</script>

