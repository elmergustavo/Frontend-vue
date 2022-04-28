import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

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
          "https://te-ayudo-api.herokuapp.com/user/register",
          usuario
        );

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async iniciarSesion( {commit}, usuario) {
      try {
        //const res = await fetch
        const data = await axios.post(
          "https://te-ayudo-api.herokuapp.com/user/login",
          usuario
        );

        console.log(data.data.token);

        commit('setToken', data.data.token )

        localStorage.setItem("token", data.data.token);

      } catch (error) {
        console.log(error);
      }
    },

    async registrarTutor(commit, tutor) {

     
      

      let str = tutor.CoursesMaster;
      let arr = str.split(','); 
      tutor.CoursesMaster = arr
      //dividir la cadena de texto por una coma
      console.log(arr);
      try {
        //const res = await fetch
        const data = await axios.post(
          "http://localhost:3000/tutor",
          tutor
        );

        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    leerToken({commit}){
if(localStorage.getItem('token')){

  commit('setToken', localStorage.getItem('token'))
}  else{

  commit('setToken', null)
}

    },

    cerrarSesion({ commit }) {
      commit('setToken', null)
      localStorage.removeItem('token')
  }

  },
  modules: {},
});
