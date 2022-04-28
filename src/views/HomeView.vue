<template>
  <div class="login">
    <div class="form-box">
      <div class="button-box">
        <div ref="btn" id="btn"></div>
        <button type="button" class="toggle-btn" @click="login()">
          Iniciar Sesión
        </button>
        <button type="button" class="toggle-btn" @click="register()">
          Registrarse
        </button>
      </div>
      <div class="google-icon">
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <img class="inicio" src="">
        <div class="data">
          <p>Name</p>
          <p id="name" class="alert alert-success"></p>
          <p>Profile Pic</p>
          <img id="image" class="rounded-circle" width="100" height="100" />
          <p>Email</p>
          <p id="email"></p>
          <!-- <button type="button" class="btn btn-danger" onclick="signOut();">Sign Out</button> -->
        </div>
      </div>

      <form
        ref="login"
        id="login"
        class="input-group"
        @submit.prevent="iniciarSesion(iniciar)"
      >
        <input
          type="email"
          class="input-field"
          placeholder="Nombre de Usuario"
          v-model="iniciar.email"
          required
        />
        <input
          type="password"
          class="input-field"
          placeholder="Contraseña"
          v-model="iniciar.password"
          required
        />
        <button type="submit" class="submit-login-btn">Iniciar Sesión</button>
      </form>

      <form
        ref="register"
        id="register"
        class="input-group"
        @submit.prevent="registerUser(usuario)"
      >
        <input
          type="text"
          class="input-field"
          name="nombre-usuario"
          placeholder="Nombre de Usuario"
          v-model="usuario.name"
          required
        />
        <input
          type="email"
          class="input-field"
          name="correo-usuario"
          placeholder="Correo Electrónico"
          v-model="usuario.email"
          required
        />
        <input
          type="password"
          class="input-field"
          name="contraseña-usuario"
          placeholder="Contraseña"
          v-model="usuario.password"
          required
        />
        <button type="submit" class="submit-btn" to="/cursoscursos">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      usuario: {
        name: "",
        email: "",
        password: "",
      },

      iniciar: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["registerUser"]),
    ...mapActions(["iniciarSesion"]),
    register() {
      const x = this.$refs.login;
      const y = this.$refs.register;
      const z = this.$refs.btn;
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "140px";
    },

    login() {
      const x = this.$refs.login;
      const y = this.$refs.register;
      const z = this.$refs.btn;

      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0px";
    },
  },

  head() {
    return {
      script: [
        {
          src: "https://apis.google.com/js/platform.js",

          async: true,
          defer: true,
          body: true,
        },

        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
          crossorigin: "anonymous",
          body: true,
        },

        {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
          body: true,
        },

        {
          type: "text/javascript",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.login {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(4, 4, 4, 4)),
    url(@/assets/images/stud.png);
  background-position: center;
  position: absolute;
}

.form-box {
  width: 380px;
  height: 500px;
  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 5px;
  overflow: hidden;
}

.button-box {
  width: 270px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 1px 1px #1cd788;
  border-radius: 30px;
}

.toggle-btn {
  padding: 5px 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}

#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 130px;
  height: 100%;
  background: linear-gradient(to right, #0ec979, #1cd788);
  border-radius: 30px;
  transition: 0.5s;
}

.input-group {
  top: 180px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
}

.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
}

.submit-btn {
  width: 65%;
  padding: 10px 30px;
  position: absolute;
  top: 200px;
  left: 50px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(to right, #0ec979, #1cd788);
  border: 0;
  outline: none;
  border-radius: 5px;
}

.submit-login-btn {
  width: 85%;
  padding: 10px 30px;
  position: absolute;
  top: 170px;
  left: 20px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(to right, #0ec979, #1cd788);
  border: 0;
  outline: none;
  border-radius: 5px;
}

.check-box {
  margin: 30px 30px 30px 0;
}

span {
  color: #000000;
  font-size: 15px;
  bottom: 67px;
  left: 50px;
  position: absolute;
}

#login {
  left: 50px;
}

#register {
  left: 450px;
}

.data {
  display: none;
}

.g-signin2 {
  position: absolute;
  top: 35%;
  left: 48%;
  margin-top: -50px;
  margin-left: -50px;
}

.inicio {
  position: absolute;
  top: 30%;
  left: 40%;
  margin-top: -50px;
  margin-left: -50px;
  display: none;
}
</style>
