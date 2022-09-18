<template>
  <body>
    <b-container>
      <b-row>
        <h2>Editar cases de sucesso</h2>
        <b-table
        striped
        hover
        :per-page="perPage"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        @row-clicked = "deletarCase">
        
        <template #cell(buttons)>
          <div class="div-todos-ico">
              <div class="div-icones">
                <a @click="deletar">
                  <b-icon-trash class="icons" scale="1"/>
                  <b class="excluir">excluir</b>
                </a>
              </div>     
            </div>
        </template>
      </b-table>
      </b-row>
    <b-row class="justify-content-end">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
        class="pagination"
        style="margin-right: 90px; margin-bottom: 22px; padding-right:15px;"
      />
    </b-row>
    </b-container>
    <b-modal id="modalDeletar" hide-footer>
      <div class="d-block text-center">
        <h3>Deseja remover o case?</h3>
      </div>
      <b-button @click="deletar" class="mt-3 botaoModal" block>Sim</b-button>
    </b-modal>
  </body>
</template>

<script>
  import {getCases,deleteCase} from "@/services/api/casesDeSucesso.js"
  export default {
    data() {
      return {
      perPage: 6,
      currentPage: 1,
      selected: [],
      fields: [
        {
          key: 'categoria',
          label: 'Categoria',
          tdClass: 'categoria',
          thClass: 'th-categoria',
        },
        {
          key: 'descricao',
          label: 'Descrição',
          tdClass: 'descricao',
          thClass: 'th-descricao',
        },
        {
          key: 'datacase',
          label: 'Data da finalização',
          tdClass: 'datacase',
          thClass: 'th-dataFinalizacao',
        },
        {
          key: 'buttons',
          label: 'Botão',
          tdClass: 'buttons',
          thClass: 'th-buttons',
        },
      ],
      items: []
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    deletar(){
      deleteCase(this.dados.itemid)
      .then(()=>{
        this.$bvModal.hide("modalDeletar");
      }).catch((err)=>{
        console.error(err)
      });
      
    },
    deletarCase(item){
      this.dados = item;
      this.$bvModal.show("modalDeletar");
    },
  },

  

  mounted(){
    getCases()
      .then((res)=>{
          this.items = res.data;
      })
      .catch((err)=>{
          console.log(err);
      });
  },
}

</script>