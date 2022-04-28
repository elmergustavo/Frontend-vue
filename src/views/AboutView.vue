<template>
    <div class="about">
<h1>Ruta Protegida</h1>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
computed: {

    ...mapState(['token'])
},


methods: {

    async datosProtegidos(){

        try{

            const res = await axios.get('https://te-ayudo-api.herokuapp.com/admin/token', {

                headers: {

    'Content-Type': 'application/json',
    'auth-token': this.token

                }

            })
            const dataDB = await res.jason()
            console.log(dataDB)

    
} catch (error){
    console.log(error)
}

 }

 },
 created(){
     this.datosProtegidos()
 }
  }

</script>