<template>
  <main>
    <div id="cabecera">
      <div class="container">
        <div class="table">
          <div class="cabecerahelp">
            <h2 class="tr">Tu trabajo a tu manera</h2>
            <h5 class="tr">
              Brindas conocimiento. Nosotros hacemos que aprender sea facil
            </h5>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footerdos">
        <h3>GT</h3>
      </div>
      <hr>
      <div class="footertres">
        <h3 class="logohome" @click="llevarhome()">TeAyudo</h3>
      </div>
    </footer>

  </main>

  
</template>



<script>
import { mapActions } from "vuex";

export default {
 
 methods: {

...mapActions(["llevarhome"]),


 }


}
</script>


<style scoped>
#cabecera {
  overflow: hidden;
  background-color: #9bf2cd;
  color: black;
  height: 13em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cabecerahelp{
  height: 0;
  text-align: center;
  bottom: 0;
   padding: 0cm;
}

.footer {
  position: fixed;
  left: 0cm;
  bottom: 0;
  width: 100%;
  padding: 0cm;
  height: 10%;
 }

.footerdos{
  position: fixed;
  left: 0cm;
  bottom: 0;
  width: 100%;
  padding: 0.3cm;
  margin-right: 2cm;
  text-align:right;
 }

 .footertres{
  position: fixed;
  left: 0cm;
  bottom: 0;
  width: 100%;
  padding: 0.3cm;
  margin-left: 0.1cm;
  text-align:left;
 }
 
 .logohome{

   cursor: pointer;
 }

</style>