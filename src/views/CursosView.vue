<template>
  <section>
    <cursos />
  </section>
  <div>
    <div class="container">
      <div class="buttom-form">
        <div class="row">
          <card
          imagen="https://github.com/Meerri/src-images/blob/main/images/idiomas.png?raw=true"
          message="Soy profesor de Lenguaje y Comunicación"
        />
        <card
          imagen="https://github.com/Meerri/src-images/blob/main/images/calculador.png?raw=true"
          message="Soy profesor de Matemáticas"
        />
        <card
          imagen="https://github.com/Meerri/src-images/blob/main/images/sustancia-quimica-peligrosa.png?raw=true"
          message="Soy profesor de Química"
        />
        <card
          imagen="https://github.com/Meerri/src-images/blob/main/images/desarrollo.png?raw=true"
          message="Soy profesor de Ciencias Sociales"
        />
        <card 
          imagen="https://github.com/Meerri/src-images/blob/main/images/natural.png?raw=true" 
          message="Soy profesor de Ciencias" />
        <card
          imagen="https://github.com/Meerri/src-images/blob/main/images/signo-de-mas.png?raw=true"
          message="¿Qué te gustaría enseñar?"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Modal from '~/components/modal.vue'
import cursos from "@/layouts/DefaultCursos.vue";
import card from "@/components/CardTemplate.vue";

export default {
  data() {
    return {
        iniciar: {
        email: "corre@correo.com",
        password: "123456789",
      },
    };
  },
  components: { cursos, card },
};
</script>