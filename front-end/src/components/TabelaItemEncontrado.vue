<template>

  <body>
    <h2>Cadastrar item encontrado</h2>
    <b-card id="card">
      <form action="http://localhost:3000/item" method="post">
        <input type="text" id="status" name="status" value= "encontrado" hidden>
        <label for="categoria">Categoria do item:</label><br>
        <b-form-select
        :options="[{ text: 'Selecione a categoria do item', value:null}, 'Vestuário', 'Eletrônico', 'Acessório', 'Documento', 'Outros']"
        :value="null"
        type="text"
        id="categoria"
        name="categoria"
        ></b-form-select><br><br>
        <label for="descricao">Descrição do item:</label><br>
        <b-form-input type="text" id="descricao" name="descricao" ></b-form-input><br>
        <label for="dataPerca">Quando foi encontrado:</label><br>
        <input type="date" id="data" name="data" ><br><br>
        <label for="fotos">Fotos:</label><br>
        <input type="text" id="fotos" name="fotos" ><br><br>
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

