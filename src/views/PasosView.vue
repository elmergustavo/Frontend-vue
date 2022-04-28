<template>
 <section>
    <pasos />
    </section>
    <div> 
    <div class="container">
      <div class="buttom-form">
            <div class="row">
              <card
                imagen="/image/nombre.png"
                message="Ingresa tu nombre completo para saber cómo dirigirnos hacia ti."
              />
              <card
                imagen="/image/descripcion.png"
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

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Llenar Formulario</button>

        <from >
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">LLenar Formulario Tutor</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Message:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send message</button>
                    </div>
                    </div>
                </div>
            </div>
        </from>

        </section>
      
    
      <a href="cursos" class="btn btn-outline-success" style="margin-left: 100%; margin: 0.1cm">Siguiente</a>
      
    </div>
    <testmodal />



   
    
  </div>
</template>

<script>
//import Modal from '~/components/modal.vue'
import pasos from '@/layouts/DefaultPasos.vue'
import card from '@/components/CardTemplate.vue'
//import testmodal from '@/components/TestModal.vue'


export default {
   components: { pasos, card}
    

}
</script>
