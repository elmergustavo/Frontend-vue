<template>
    <main>
        <header>
                <nav>
                    <div>
                        <img class="logo" src="" alt="Logo-TeAyudo">
                    </div>
                    <div>
                        <input type="search" placeholder="Buscar el curso ....">
                        <button>Buscar</button>
                    </div>
                </nav>
        </header>
        
        <footer>
            <div class="container-footer2">
                <div>
                    <img class="logo2" src="" alt="Logo-TeAyudo">
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
}

nav{
    display: flex;
    justify-content: space-between;
    margin:0px 25px 0px 25px;
    padding-top: 10px;
    display: flex;
    align-items: center;
}

header{
    height: 6em;
    background-color: #9BF2CD;
}

a{
    color: #000;
    text-decoration: none;
    text-align: center;
    padding: 10px 20px;
}

input{
    width: 418px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid black;
    color: black;
    font-size: large;
    padding:10px;
}

button{
    width: 90px;
    height: 38px;
    left: 425px;
    border: 1px solid #1CD788;
    border-radius: 10px;
    background-color: #1CD788;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
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