<template>
    <main>
        <header>
            <div>
                <img class="logo" src="@/static/image/logo.png" alt="Logo-TeAyudo">
            </div>
        </header>
        <Nuxt />
        <hr>
        <footer>
            <div class="container-footer2">
                <div>
                    <img class="logo2" src="@/static/image/logo.png" alt="Logo-TeAyudo">
                </div>
                <div>
                    <p>GT</p>
                </div>
            </div>
        </footer>
    </main>
</template>

<style scoped>
.logo{
    display:flex;
    width: 200px;
    align-items: center;
    padding: 10px 0px 0px 25px;
}

header{
    height: 6em;
    background-color: #9BF2CD;
}

/* footer */
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