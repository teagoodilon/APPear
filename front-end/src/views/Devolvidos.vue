<template>
  <body>
    <b-container>
      <b-row>
        <h2>Itens devolvidos</h2>
        <b-table
        striped
        hover
        :per-page="perPage"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        @row-clicked = "editar">
        <template #cell(buttons)>
          <div class="div-todos-ico">
              <div class="div-icones">
                <b class="margem-entre">
                  <b-icon-check class="icons" scale="2" />
                  <b class="finalizar">finalizar</b>
                </b>
              </div>
              <div class="div-icones">
                <a>
                  <b-icon-trash class="icons" scale="1"/>
                  <b class="excluir">excluir</b>
                </a>
              </div>     
            </div>
        </template>
      </b-table>
      <b-modal id = "modal-editar" hide-footer>
          <template #modal-title>
            Itens Devolvidos
          </template> 
          <b-button @click="deletar" class="mt-3 botaoModal" block>Excluir</b-button>
          <b-button @click="createCase" class="mt-3 botaoModal" block>Finalizar</b-button>
          

        </b-modal>
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
  </body>
</template>

<script>
  import {getDevolucaos,deleteDevolucao} from "@/services/api/devolucao.js"
  import {postCase} from "@/services/api/casesDeSucesso.js"
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
          key: 'data',
          label: 'Perca',
          tdClass: 'data',
          thClass: 'th-perca',
        },
        {
          key: 'datadevolucao',
          label: 'Encontro',
          tdClass: 'encontro',
          thClass: 'th-encontro',
        },
        {
          key: 'buttons',
          label: 'Botões',
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
      deleteDevolucao(this.dados.itemid)
      .then(()=>{
        this.$bvModal.hide("modalDeletar");
      }).catch((err)=>{
        console.error(err)
      });
      
    },
    deletarDevolucao(item){
      this.dados = item;
      this.$bvModal.show("modalDeletar");
    },

    createCase(){
      postCase(this.dados)
      .then(()=>{
          alert('ENVIADO PARA devolucao')
        }).catch((err)=>{
          console.error(err)
        });
      this.$bvModal.hide("modal-editar");
      this.$forceUpdate();
    },

    editar(item){
      this.dados = item;
      this.$bvModal.show("modal-editar");
    },
  },

  

  mounted(){
    getDevolucaos()
      .then((res)=>{
          this.items = res.data;
      })
      .catch((err)=>{
          console.log(err);
      });
  },
}

</script>