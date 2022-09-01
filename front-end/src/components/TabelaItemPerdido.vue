<template>

  <body>
    
    <h2>Cadastrar item perdido</h2>

    <form action="http://localhost:3000/cliente" method="post">
      <label for="categoria">Categoria do item:</label><br>
      <input type="text" id="categoria" name="categoria" ><br><br>

      <label for="dataPerca">Quando foi perdido:</label><br>
      <input type="date" id="dataPerca" name="dataPerca" ><br><br>

      <label for="fotos">Fotos:</label><br>
      <input type="text" id="fotos" name="fotos" ><br><br>
      
      <label for="descricao">Descrição do item:</label><br>
      <input type="text" id="descricao" name="descricao" ><br><br>

      <input type="submit" value="Salvar">
      <input type="reset" value="Limpar">
    </form> 

  </body>
</template>

<script>

</script>


<style scoped>
body{
  margin-left: 100px;
}
</style>

