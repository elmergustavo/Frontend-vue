<template>
  <section>
    <pasos />
  </section>
  <div>
    <div class="container">
      <div class="buttom-form">
        <div class="row">
          <card
            imagen="https://github.com/Meerri/src-images/blob/main/images/nombre.png?raw=true"
            message="Ingresa tu nombre completo para saber cómo dirigirnos hacia ti."
          />
          <card
            imagen="https://github.com/Meerri/src-images/blob/main/images/descripcion.png?raw=true"
            message="Descríbete en palabras para que tus futuros alumnos te conozcan brevemente."
          />
          <card
            imagen="https://github.com/Meerri/src-images/blob/main/images/gradoacademico.png?raw=true"
            message="Anota el grado académico que tienes para conocer tus mejores habilidades."
          />
          <card
            imagen="https://github.com/Meerri/src-images/blob/main/images/habilidades.png?raw=true"
            message="Anota con precisión tus habilidades profesionales para ayudarte a conseguir más trabajo."
          />
          <card
            imagen="https://github.com/Meerri/src-images/blob/main/images/datoscorreocelu.png?raw=true"
            message="Agrega credibilidad proporcionando tus datos de teléfono o celular y correo electrónico para mantener una comunidad segura."
          />
        </div>
      </div>

      <section>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Llenar Formulario
        </button>

        <form @submit.prevent="registrarTutor(tutor)">
          <hr id="hr">
          <b-table striped hover :items="submittedCursos" :fields="fields"></b-table>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Formulario de Solicitud
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Ingresa tu Nombre:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="tutor.name"
                        invalid-feedback="Llenar este campo"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Ingresa tu Apellido:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="tutor.lastName"
                        invalid-feedback="Llenar este campo"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label"
                        >Ingresa una Descripción:</label
                      >
                      <textarea
                        class="form-control"
                        id="message-text"
                        v-model="tutor.description"
                        invalid-feedback="Llenar este campo"
                        required
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Ingresa tu Grado Académico:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="tutor.academicDegree"
                        invalid-feedback="Llenar este campo"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Describe tus habilidades:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="tutor.CoursesMaster"
                        invalid-feedback="Llenar este campo"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Ingresa tu correo:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="tutor.email"
                        invalid-feedback="Llenar este campo"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Ingresa tu celular:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        v-model="tutor.phone"
                        invalid-feedback="Llenar este campo"
                        required
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      <a
        href="cursos"
        class="btn btn-outline-success"
        style="margin-left: 100%; margin: 0.1cm"
        >Siguiente</a
      >
    </div>
    <testmodal />
  </div>
</template>

<script>
//import Modal from '~/components/modal.vue'
import pasos from "@/layouts/DefaultPasos.vue";
import card from "@/components/CardTemplate.vue";
//import testmodal from '@/components/TestModal.vue'
import { mapActions } from "vuex";

export default {
  data() {
    return {
      tutor: {
        name: "",
        lastName: "",
        description: "",
        academicDegree: "",
        CoursesMaster: "",
        email: "",
        phone: "",
      },

      iniciar: {
        email: "corre@correo.com",
        password: "123456789",
      },
    };
  },
    CoursesMaster: '',
    CoursesMasterState: null,
    fields:['nombre', 'apellido' ,'form.CoursesMaster' ],
    submittedCursos: [], 
    components: { pasos, card },

  methods: {
    ...mapActions(["registrarTutor"]),

    handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedCursos.push({ nombre: this.nombre, apellido: this.apellido, CoursesMaster: this.form.CoursesMaster })
        console.log(this.submittedCursos)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
  },
};
</script>
