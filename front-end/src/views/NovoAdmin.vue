<template>
  <body>
    <h2>Cadastrar novo admin</h2>
    <b-card id="card">
      <form>
        <label for="nome">Nome Completo:</label><br>
        <b-form-input type="text" id="nome" name="nome" ></b-form-input><br>
        <label for="nome">Email:</label><br>
        <b-form-input type="text" id="email" name="email" ></b-form-input><br>
        <div>
          <b-button id="botao" type="submit" block>Confirmar</b-button>
          <b-button id="botao" type="reset" block>Limpar</b-button>
        </div>
      </form> 
    </b-card>
  </body>
</template>

<script>


</script>


<style scoped>
#botao{
  font-size: 20px;
  font-weight: 500;
}

#card{
  color: white;
  text-align: left;
  position: absolute;
  display: flex;
  font-family: MontSerrat;
  font-size: 20px;
  width: 70%;
  background-color: #343434;
}
 
body{
  margin-left: 10px;
}
</style>

