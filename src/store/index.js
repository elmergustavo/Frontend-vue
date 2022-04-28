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

    async iniciarSesion({ commit }, usuario) {
      try {
        //const res = await fetch
        const data = await axios.post(
          "https://te-ayudo-api.herokuapp.com/user/login",
          usuario
        );
        console.log(data.data)
        console.log(data.data.token);

        commit("setToken", data.data.token);

        localStorage.setItem("token", data.data.token);



      } catch (error) {
        console.log(error);
      }
    },

    async registrarTutor(commit, tutor) {
      if (tutor.name === "" || 
      tutor.lastName === "" ||
      tutor.description=== "" || 
      tutor.academicDegree=== "" || 
      tutor.CoursesMaster=== "" ||
      tutor.email=== "" || 
      tutor.phone=== "" ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes llenar todos los campos',
        })
        return
      }
     
      let str = tutor.CoursesMaster;
      let arr = str.split(', '); 
      tutor.CoursesMaster = arr
      //dividir la cadena de texto por una coma
      console.log(arr);
      try {
        //const res = await fetch
        const data = await axios.post(
          "https://te-ayudo-api.herokuapp.com/tutor",
          tutor
        );

        Swal.fire(
          'Tutor completado',
          'Gracias por participar en TeAyudo',
          'success'
        )
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async registrarStudent(commit, student) {

      if (student.currentGrade === '' || student.phone === ''){

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes llenar todos los campos',
        })
        return
      }
      console.log(student)
      try {
        //const res = await fetch
        const data = await axios.post(
          "https://te-ayudo-api.herokuapp.com/student",
          student
        );
        Swal.fire(
          'Estudiante completado',
          'Gracias por participar en TeAyudo',
          'success'
        )
        console.log(data);

      } catch (error) {
        console.log(error);
      }
    },

    leerToken({ commit }) {
      if (localStorage.getItem("token")) {
        commit("setToken", localStorage.getItem("token"));
      } else {
        commit("setToken", null);
      }
    },

    cerrarSesion({ commit }) {
      localStorage.removeItem("token");
      commit("setToken", null);
    },
  },
  modules: {},
});
