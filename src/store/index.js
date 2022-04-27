import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    state: {
      token: null,
    },
  },
  getters: {},
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async registerUser(commit, usuario) {
      console.log(usuario);
      try {
        //const res = await fetch
        const data = await axios.post(
          "http://localhost:3000/user/register",
          usuario
        );

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async iniciarSesion(commit, usuario) {
      try {
        //const res = await fetch
        const data = await axios.post(
          "http://localhost:3000/user/login",
          usuario
        );

        console.log(data.data.token);

        localStorage.setItem("token", data.data.token);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
