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
        :current-page="currentPage">
        <template #cell(buttons)>
          <div class="div-todos-ico">
              <div class="div-icones">
                <b class="margem-entre">
                  <b-icon-check class="icons" scale="2" />
                  <b class="finalizar">finalizar</b>
                </b>
              </div>
              <div class="div-icones">
                <a @click.prevent="excluir" >
                  <b class="margem-entre">
                    <b-icon-camera class="icons" scale="1.2" />
                    <b class="fotos">fotos</b>
                  </b>
                </a>
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
  export default {
    data() {
      return {
      perPage: 6,
      currentPage: 1,
      selected: [],
      fields: [
        {
          key: 'situacao',
          label: 'Situação',
          tdClass: 'situacao',
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
      items: [
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'sim'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'nao'},
        {situacao: 'Perdido', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'sim'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'nao'},
        {situacao: 'Perdido', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'sim'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'nao'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'sim'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'nao'},
        {situacao: 'Perdido', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'sim'},
        {situacao: 'Perdido', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'nao'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'sim'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'nao'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'sim'},
        {situacao: 'Encontrado', categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', buttons: 'nao'},
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
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

</style>

