<template>
  <body>
    <b-container>
      <b-row>
        <h2>Itens cadastrados</h2>
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
              <b class="margem-entre">
                <b-icon-pin-angle class="icons" scale="1.2" />
                <b class="fotos">editar</b>
              </b>
            </div>
          </div>
        </template>
        </b-table>
        <b-modal id = "modal-editar" hide-footer>
          <template #modal-title>
            Item cadastrado
          </template>
          <b-form-input v-model = "dados.status"></b-form-input>
          <b-form-select
          :options="[{ text: 'Selecione a categoria do item', value:null}, 'Vestuário', 'Eletrônico', 'Acessório', 'Documento', 'Outros']"
          :value="null"
          type="text"
          v-model = "dados.categoria"
          class="mt-2"
          ></b-form-select>
          <b-form-input v-model = "dados.descricao" class="mt-2"></b-form-input>

          <b-button @click="deletar" class="mt-3 botaoModal" block>Excluir</b-button>
          <b-button @click="editarItem" class="mt-3 botaoModal" block>Editar </b-button>
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
  import {getItens, deleteItem, putItem} from "@/services/api/item.js"
  import {postCase} from "@/services/api/casesDeSucesso.js"
  
  export default {
    data() {
      return {
      perPage: 6,
      currentPage: 1,
      selected: [],
      fields: [
        {
          key: 'status',
          label: 'Situação',
          tdClass: 'status',
          thClass: 'th-situacao',
        },
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
          key: 'buttons',
          label: 'Botões',
          tdClass: 'buttons',
          thClass: 'th-buttons',
        },
      ],
      items: [],
      dados:{
        status: '',
        categoria:'',
        descricao:'',
      }
    }
    
  },
  methods: {
    deletar(){
      deleteItem(this.dados.itemid)
      .then(()=>{
        alert('deletado')
      }).catch((err)=>{
        console.error(err)
      });
      this.$bvModal.hide("modal-editar");
      this.$forceUpdate();
    },

    editarItem(){
      putItem(this.dados.itemid,this.dados)
        .then(()=>{
          alert('editado')
          this.$bvModal.hide("modal-editar");
        }).catch((err)=>{
          console.error(err)
          this.$bvModal.hide("modal-editar");
        });
      
      this.$forceUpdate();

    },

    editar(item){
      this.dados = item;
      this.$bvModal.show("modal-editar");
    },

    createCase(){
      postCase(this.dados)
      .then(()=>{
          alert('ENVIADO PARA CASE DE SUCESSO')
        }).catch((err)=>{
          console.error(err)
        });
      this.$bvModal.hide("modal-editar");
      this.$forceUpdate();
    }

  },
 
  mounted(){
    getItens()
      .then((res)=>{
          this.items = res.data;
      })
      .catch((err)=>{
          console.log(err);
      });
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
}

</script>

<style lang="scss">
  
h2{
  font-family: MontSerrat;
  font-weight: bold !important;
  font-size: 40px !important;
  margin-bottom: 35px !important;
  color:#042d5b !important;
}

.table{
  width: 90% !important;
  border-bottom: 3px solid#042d5b !important;
}

thead{
  background: #042d5b !important;
}

.th-situacao, .th-categoria, .th-descricao, .th-buttons, .th-perca, .th-encontro, .th-dataFinalizacao{
  border: 3px solid#042d5b !important;
  color: white;
  text-align: center;
  font-family: Montserrat;
}

.situacao, .categoria, .descricao, .buttons, .perca, .encontro, .dataFinalizacao{
  border-right: 3px solid#042d5b !important;
  border-left: 3px solid#042d5b !important;
  text-align: center;
}

.table th, .table td{
  vertical-align: middle !important;
}

.page-item.active .page-link {
  border-color: #042d5b !important;
  background-color: #042d5b !important;
  color: white !important;
}

.page-link {
  color:#042d5b !important;
}

.div-icones:hover {
  cursor: pointer;
  color: #042d5b !important;
  .icons{
    cursor: pointer;
    color: #042d5b !important;
  }
}

.div-todos-ico {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 7px;
  display: flex;
  vertical-align: middle;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.div-icones {
  transition: 300ms;
  .icons{
    transition: 300ms;
  }
}

.margem-entre {
  margin-right: 20px;
}

.finalizar, .fotos, .excluir {
  margin-left: 5px;
}

.botaoModal{
  background-color:#042d5b !important;
  border: #042d5b !important;
  font-family: Montserrat;
}

</style>

