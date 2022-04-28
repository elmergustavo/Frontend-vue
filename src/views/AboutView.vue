<template>
    <div class="about">
<h1>Ruta Protegida</h1>
    </div>

    <button @click="cerrarSesion()">Cerrar Sesión</button>

</template>

<script>
import { mapActions } from "vuex";

export default {
    
    methods:{

...mapActions(["cerrarSesion"]),

    }
}
</script>