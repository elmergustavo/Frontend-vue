<template>
    <div class="container">
        <div>
            <img src="@/static/image/student.svg" alt="student">
        </div>
        <div>
            <h1>Bienvenido</h1>
            <h2>Se le solicitara llenar el siguiente formulario</h2>
            <ModalStudent/>
            <br>
            <a href="student" class="btn btn-outline-success" style="margin-left: 100%; margin: 0.1cm">Siguiente</a>
        </div>
    </div>
</template>



<style scoped>
.container{
    margin: 25px;
    display: flex;
    gap: 60px;
}

img{
    width: 500px;
}

h2{
    color: rgba(0, 0, 0, 0.56);
}

</style>