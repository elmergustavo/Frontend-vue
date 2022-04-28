<template>
  <div class="container-p">
    <h1>Tutorías en línea</h1>
    <h4>Anímate a perfeccionar las tareas de tus cursos usando tutorías en línea</h4>
    <div class="container">
      <cardstudent
          name_tutor = student[0].name
          curso1 = "Mate"
          curso2 = "Mate"
      />
      {{student[2].name}}
      {{student[2].lastName}}
      <br>
      {{student[2].CoursesMaster[0].name}}
      <br>
      {{student[2].CoursesMaster[1].name}}
    </div>
  </div>
</template>

<script>
  import cardstudent from '~/components/cardstudent.vue';
  export default {
    async asyncData({ $axios }) {
    const student = await $axios.$get('/tutor')
    console.log(student)
    return { student }
    },
    components: {cardstudent },
    data() {
      return {
        name_tutor: '',
        curso1: '',
        curso2: ' ',
        curso3: ' '
      };
    },
    layout: 'defaultstudents',
  };
</script>

<style scoped>
.container-p{
  margin: 25px;
}

h4{
  color: rgba(0, 0, 0, 0.56);

}
</style>