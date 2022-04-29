<template>
  <section>
    <buscador />
  </section>
   <div class="container-p">
    <h1>Tutorías en línea</h1>
    <h4>Anímate a perfeccionar las tareas de tus cursos usando tutorías en línea</h4>
    <div class="container">
      <cardstudent
          name_tutor = "David Garcia "
          curso1 = "Matematicas"
          curso2 = "Ciencia Naturales"
      />
      <cardstudent
          name_tutor = "Jose Fernando Menchu"
          curso1 = "Fisica"
          curso2 = "Ingles"
      />
    <cardstudent
          name_tutor = "Luis Rodriguez"
          curso1 = "Programacion"
          curso2 = "Sociales"
      />
      <cardstudent
          name_tutor = "Kelvin Cano"
          curso1 = "Algebra Lineal"
          curso2 = "Ingles Avanzado"
      />
    <cardstudent
          name_tutor = "Erick Lima"
          curso1 = "Programacion"
          curso2 = "Algebra Lineal"
      />
    <cardstudent
          name_tutor = "Kelly Garcia"
          curso1 = "Comunicacion y Lenguaje"
          curso2 = "Ingles"
      />


    </div>
  </div>
</template>


// <script>

// import buscador from "@/layouts/DefaultBuscador.vue";

// export default defineComponent({
//     setup() {
        
//     },
//      components: { buscador },
// })
// </script>



<style scoped>
.container-p{
  margin: 25px;
}

h4{
  color: rgba(0, 0, 0, 0.56);

}
</style>