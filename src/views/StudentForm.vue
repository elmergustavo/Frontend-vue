<template>
  <section>
    <student />
  </section>
  <div class="container">
    <div>
      <img src="@/assets/student.svg" alt="student" />
    </div>
    <div>
      <h1>Bienvenido</h1>
      <h2>Se le solicitara llenar el siguiente formulario</h2>

      <br />

      <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@mdo"
    >
      Llenar Formulario
    </button>

    <form @submit.prevent="registrarStudent(estudiante)">
      <hr id="hr" />
      <b-table
        striped
        hover
        :items="submittedCursos"
        :fields="fields"
      ></b-table>
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
                    >Ingresa tu Grado Académico:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    invalid-feedback="Llenar este campo"
                    v-model="estudiante.currentGrade"
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
                    invalid-feedback="Llenar este campo"
                    v-model="estudiante.phone"
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
      <a
        href="student"
        class="btn btn-outline-success"
        style="margin-left: 100%; margin: 0.1cm"
        >Siguiente</a
      >
    </div>
  </div>
</template>

<script>
import student from "@/layouts/DefaultStudentHeader.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      estudiante: {
        currentGrade: "",
        phone: "",
      },
    };
  },
  components: { student },
  methods: {
    ...mapActions(["registrarStudent"])
  },
};
</script>

<style scoped>
.container {
  margin-top: 25px;
  display: flex;
  gap: 20px;
}

img {
  width: 500px;
}

h2 {
  color: rgba(0, 0, 0, 0.56);
  font-size: 30px;
}

h1 {
  text-align: left;
}
</style>
