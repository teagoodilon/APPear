<!--<template>
  <body>
    <h2>Buscar Item</h2>
  </body>
</template>

<script>


</script>


<style scoped>
</style>
-->

<template>
  <div class = "teste ">
      <b-table :itens = "items"></b-table>
  </div>
</template>
<script>
  import {getMebros} from "@/services/api/item.js"
  export default{
      name: "Home",
      data(){
          return{
              items:[],
          };
      },
      mounted(){
          getMebros()
              .then((res)=>{
                  this.items = res.data;
              })
              .catch((err)=>{
                  console.log(err);
              });
      },
  };
</script>

<style>

</style>
