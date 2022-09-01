<template>
    <div class="main">
        <div class="backgroundd"></div>
        <section class="ladoE">
            <div>
                <h1>APPear</h1>
                <img src="@/assets/logo.png" alt="">
            </div>
        </section>

        <section class="ladoD">
            <div class="def">
                <img src="@/assets/fundoD.png" alt="" class="deff fundo">
                <img src="@/assets/Fundobranco.png" alt="" class="deff fundoB">
                <img src="@/assets/olhofechado.png" alt="" class="deff olhoF">
                <img src="@/assets/olhoaberto.png" alt="" class="deff olhoA">
            </div>
            <div class="desc">
                <form class="form">
                    <h2>LOGIN</h2>
                    <label for="email">Email:</label>
                    <input type="text" name="email">
                    <label for="senha">Senha:</label>
                    <input type="password" name="senha">
                    <p><a href="#">Esqueceu a senha?</a></p>
                </form>
                <div class="btn-cad">
                    <a href="/dash/cases">
                        <input type="button" value="ENTRAR" class="butn">
                    </a>
                    <p>Ainda não tem conta?</p>
                    <p><a href="#">CADASTRE-SE</a></p>
                </div>
            </div>
            <div class="admin">
                <p><a href="#">ENTRAR COMO ADMINISTRADOR</a></p>
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background: #e0dcd0;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
}

.main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

section {
    width: 100%;
    height: 100%;
}


/* LADO ESQUERDO */

.ladoE {
    display: flex;
    justify-content: center;
    align-items: center;
}

.backgroundd {
    background: #042D5B;
    width: 100vw;
    height: 150vh;
    left: -45%;
    box-shadow: 0px 0px 30px 10px rgb(107, 107, 107);
    transform: rotate(75deg);
    position: absolute;
    z-index: -1;
}

.ladoE img {
    width: 100%;
}

.ladoE h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    font-size: 64px;
    color: #e0dcd0;
    font-weight: 800;
}




/* LADO DIREITO */

.ladoD {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.desc .form {
    display: flex;
    flex-direction: column;
    padding: 26px;
    border-radius: 5px;
    background: #343434;
    color:#e0dcd0;
    box-shadow: 9px 9px 25px 0px rgb(117, 117, 117);
}

.desc h2 {
    display: flex;
    justify-content: center;
    color: #e0dcd0;
    font-size: 44px;
    margin-bottom: 10px;
    margin-top: -20px;
}

.desc label {
    font-size: 22px;
}

.desc input {
    padding: 4px;
    margin-bottom: 4px;
    border-radius: 5px;
    font-size: 16px;
    width: 250px;
    border: none;
    outline: none;
    background: #e0dcd0;
    color:#343434;
}

.desc a {
    text-decoration: none;
    color: #e0dcd0;
}

.desc .btn-cad {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.btn-cad .butn {
    color: #e0dcd0;
    padding: 8px 24px;
    background: #343434;
    border: none;
    border-radius: 5px;
    font-size: 24px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 4px 4px 10px 0px rgb(117, 117, 117);
}

.btn-cad .butn:hover{
    background: #1d1d1d;
}

.btn-cad a {
    text-decoration: none;
    color: #343434;
    font-weight: 600;
}


.admin {
    right: 7px;
    bottom: 7px;
    background: #343434;
    position: absolute;
    padding: 6px;
}

.admin a {
    text-transform: none;
    text-decoration: none;
    color: #e0dcd0;
}

.deff.fundo{
    position: absolute;
    top: 6px;
    right: 7px;
    width: 70px;
}

.deff.fundoB {
    position: absolute;
    top: 11px;
    right: 43px;
    width: 27px;
}

.deff.olhoF {
    position: absolute;
    top: 13px;
    right: 47px;
    width: 20px;
}

.deff.olhoA {
    position: absolute;
    top: 13px;
    right: 19px;
    width: 20px;
}
</style>