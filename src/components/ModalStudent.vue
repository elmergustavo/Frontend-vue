<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Formulario</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Formulario"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Grado Academico"
          label-for="grade-input"
          invalid-feedback="Grado Academico es requerido"
          :state="gradeState"
        >
          <b-form-input
            id="grade-input"
            v-model="grade"
            :state="gradeState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Numero telefonico"
          label-for="number-input"
          invalid-feedback="Numero telefonico es requerido"
          :state="numberState"
        >
          <b-form-input
            id="number-input"
            v-model="number"
            :state="numberState"
            required
          ></b-form-input>
        </b-form-group>

      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        grade: '',
        gradeState: null,
        submittedGrade: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.gradeState = valid
        this.numberState = valid
        return valid
      },
      resetModal() {
        this.grade = ''
        this.gradeState = null
        this.number = ''
        this.gradeState = null
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedGrade.push(this.grade)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>