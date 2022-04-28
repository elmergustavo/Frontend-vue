<template>
    <main>
        <header>
            <nav>
                <div>
                    <img class="logo" src="https://github.com/Meerri/src-images/blob/main/images/logo.png?raw=true" alt="Logo-TeAyudo">
                </div>
                <div class="container-nav">
                    <a href="" class="container-button">Aplicar a Tutor</a>
                    <a href="" class="container-button">Mi Perfil de Estudiante</a>
                    <a href="" class="container-button" @click="cerrarSesion()">Cerrar Sesión</a>
                </div>
            </nav>
        </header>
        <footer>
            <div class="container-footer">
                <div>
                    <p class="container-p">Categorías</p>
                    <ul>
                        <li>Comunicación y Lenguaje</li>
                        <li>Matemáticas</li>
                        <li>Ciencias Naturales</li>
                        <li>Ciencicas Sociales</li>
                        <li>Química</li>
                        <li>Programción</li>
                        <li>Administración</li>
                    </ul>
                </div>
                
                <div>
                    <p class="container-p">Acerca de</p>
                    <ul>
                        <li>Curos</li>
                        <li>Tutores</li>
                        <li>Grados</li>
                        <li>Políticas de Privacidad</li>
                        <li>Terminos de Servicio</li>
                    </ul>
                </div>
                <div>
                    <p class="container-p">Ayuda</p>
                    <ul>
                        <li>Ayuda y Soporte</li>
                        <li>Confianza y Seguridad</li>
                    </ul>
                </div>
                <div>
                    <p class="container-p">Comunidad</p>
                    <ul>
                        <li>Estandares de Comunidad</li>
                        <li>Invitar a un Amigo</li>
                        <li>Ser un colaborador de TeAyudo</li>
                    </ul>
                </div>
                <div>
                    <p class="container-p">Más sobre TeAyudo</p>
                    <ul>
                        <li>Aprende cursos en Línea</li>
                        <li>Espacio de Trabajo de TeAyudo</li>
                        <li>Guía de TeAyudo</li>
                    </ul>
                </div>
                <hr>
            </div>
            <div class="container-footer2">
                <div>
                    <img class="logo2" src="https://github.com/Meerri/src-images/blob/main/images/logo.png?raw=true" alt="Logo-TeAyudo">
                </div>
                <div>
                    <p>GT</p>
                </div>
            </div>
        </footer>
    </main>
</template>


<script>
import { mapActions } from "vuex";

export default {
 
 methods: {

...mapActions(["cerrarSesion"]),

 }


}
</script>

<style scoped>
.logo{
    display:flex;
    width: 200px;
    align-items: center;
}

nav{
    display: flex;
    justify-content: space-between;
    margin:0px 25px 0px 25px;
    display: flex;
    align-items: center;
}

header{
   background-color: #9BF2CD;
    height: 6em;
    padding: 5px 0px;
}

a{
    color: #000;
    text-decoration: none;
    text-align: center;
    padding: 10px 20px;
}

.container-button{
    color: white;
    background-color: black;
    border-radius: 10px;
}

p{
    padding-right: 50px;
}

/* footer */
.container-footer{
    margin:50px 25px 0px 25px;
    display: flex;
    gap: 45px;
}

.container-p{
    /* text-align: center; */
    font-size: 21px;
}

li{
    color: #9b9191;
    list-style: none;
    margin: 0px;
    font-size: 20px;
}

.container-footer2{
    margin: 0px 25px 0px 25px ;
    display: flex;
    justify-content: space-between;
}

.logo2{
    display:flex;
    width: 100px;
    align-items: center;
    margin-bottom: 15px;
}
</style>