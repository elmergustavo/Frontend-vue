<template>
  <section>
    <pasos />
  </section>
  <div>
    <div class="container">
      <div class="buttom-form">
        <div class="row">
          <card
            imagen="./assets/images/nombre.png" alt="" @load="loadImage"
            message="Ingresa tu nombre completo para saber cómo dirigirnos hacia ti."
          />
          <card
            imagen="static/image/descripcion.png"
            message="Descríbete en palabras para que tus futuros alumnos te conozcan brevemente."
          />
          <card
            imagen="/image/gradoacademico.png"
            message="Anota el grado académico que tienes para conocer tus mejores habilidades."
          />
          <card
            imagen="/image/habilidades.png"
            message="Anota con precisión tus habilidades profesionales para ayudarte a conseguir más trabajo."
          />
          <card
            imagen="/image/datoscorreocelu.png"
            message=" Agrega credibilidad proporcionando tus datos de teléfono o celular y correo electrónico para mantener una comunidad segura."
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
        phone: ""
      },

      iniciar: {
        email: "corre@correo.com",
        password: "123456789",
      },
    };
  },

  components: { pasos, card },

  methods: {
    ...mapActions(["registrarTutor"]),

   
  },
};
</script>
