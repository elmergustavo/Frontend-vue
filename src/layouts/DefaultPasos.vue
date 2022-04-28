<template>
  <main>
    <div id="cabecera">
      <div class="cabecera">
        <h4>TeAyudo</h4>
        <hr style="margin: 0px;">
        <div class="cabecerahelp">
          <h5 class="tr">
          ¡Tu primera impresión importa! Crea un perfil que se destaque entre la multitud de TeAyudo
        </h5>
        </div>
        <div class="container">
          <div class="table">
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
        <h3>TeAyudo</h3>
      </div>
    </footer>
  </main>

</template>

<style scoped>
#cabecera {
  overflow: hidden;
  background-color: #9bf2cd;
  color: black;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cabecera{
  height: 50px;
  width: 100%;
  margin-left: 3rem;
  text-align: left;
}

.cabecerahelp{
  height: 50px;
  width: 100%;
  margin-right: 32rem;
  text-align: right;
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
</style>