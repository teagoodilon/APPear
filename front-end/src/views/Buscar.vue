<template>
  <body>
    <h2>Buscar Item</h2>
    <label id="categoria" for="categoria">Categoria do item:</label><br>
    <b-nav-form>
      <b-form-select
      :options="[{ text: 'Selecione a categoria do item', value:null}, 'Vestuário', 'Eletrônico', 'Acessório', 'Documento', 'Outros']"
      :value="null"
      type="text"
      id="categoria"
      name="categoria"
      ></b-form-select><br><br>
      <b-button size="mm" class="my-3 my-sm-0" type="submit">Buscar</b-button>
    </b-nav-form>
    <div style="margin-top: 30px">
      <h1 id="categoria">Itens que foram encontrados recentemente:</h1>
      <b-card-group deck>
        <b-card
        no-body
        style="max-width: 13rem; margin-top: 30px;"
        img-src="https://placekitten.com/380/200"
        img-alt="Image"
        img-top
        ><template #header>
          <h4 class="mb-0">Gatinho fofe</h4>
        </template>
        </b-card>

        <b-card
        no-body
        style="max-width: 13rem; margin-top: 30px;"
        img-src="https://placekitten.com/381/200"
        img-alt="Image"
        img-top
        ><template #header>
          <h4 class="mb-0">Gatinho fofe</h4>
        </template>
        </b-card>

        <b-card
        no-body
        style="max-width: 13rem; margin-top: 30px;"
        img-src="https://placekitten.com/378/200"
        img-alt="Image"
        img-top
        ><template #header>
          <h4 class="mb-0">Gatinho fofe</h4>
        </template>
        </b-card>

        <b-card
        no-body
        style="max-width: 13rem; margin-top: 30px;"
        img-src="https://placekitten.com/365/200"
        img-alt="Image"
        img-top
        ><template #header>
          <h4 class="mb-0">Gatinho fofe</h4>
        </template>
        </b-card>
      </b-card-group>
      <b-card-group deck>
        <b-card
        no-body
        style="max-width: 13rem; margin-top: 30px;"
        img-src="https://placekitten.com/380/200"
        img-alt="Image"
        img-top
        ><template #header>
          <h4 class="mb-0">Gatinho fofe</h4>
        </template>
        </b-card>

        <b-card
        no-body
        style="max-width: 13rem; margin-top: 30px;"
        img-src="https://placekitten.com/381/200"
        img-alt="Image"
        img-top
        ><template #header>
          <h4 class="mb-0">Gatinho fofe</h4>
        </template>
        </b-card>

        <b-card
        no-body
        style="max-width: 13rem; margin-top: 30px;"
        img-src="https://placekitten.com/378/200"
        img-alt="Image"
        img-top
        ><template #header>
          <h4 class="mb-0">Gatinho fofe</h4>
        </template>
        </b-card>

        <b-card
        no-body
        style="max-width: 13rem; margin-top: 30px;"
        img-src="https://placekitten.com/365/200"
        img-alt="Image"
        img-top
        ><template #header>
          <h4 class="mb-0">Gatinho fofe</h4>
        </template>
        </b-card>
      </b-card-group>
    </div>
  </body>
</template>

<script>


</script>


<style scoped>

#categoria{
  font-family: MontSerrat;
  font-size: 20px;
}

.my-3{
  margin-left: 20px !important;
  font-family: MontSerrat;
  font-size: 18px;
}

.mb-0{
  font-family: MontSerrat;
  font-size: 20px;
}
</style>