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
        :current-page="currentPage">
        <template #cell(buttons)>
          <div class="div-todos-ico">
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
          key: 'dataFinalizacao',
          label: 'Data da finalização',
          tdClass: 'dataFinalizacao',
          thClass: 'th-dataFinalizacao',
        },
        {
          key: 'buttons',
          label: 'Botão',
          tdClass: 'buttons',
          thClass: 'th-buttons',
        },
      ],
      items: [
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'sim'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001', buttons: 'nao'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'sim'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'nao'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'sim'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'nao'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'sim'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'nao'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'sim'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'nao'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'sim'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'nao'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'sim'},
        {categoria: 'camisa', descricao: 'Camisa da marca champion, verde em bom estado', dataFinalizacao: '25/05/2001',buttons: 'nao'},
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