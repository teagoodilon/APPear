<template>
  <div class="sideBarComponent">
    <div id="sidebar-dash">

      <b-row class="px-4 py-4" style="margin-top: 10px">
      </b-row>

      <router-link
        class="abas"
        to="/dash/cases"
        v-on:click.native="handleChangePage(0)"
        :class="{ ativo: isActive[0] }"
      >
        <!-- Cases de sucesso -- Primeira aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col  class="abas_text" md="4">
            Cases de sucesso</b-col>
        </b-row>
      </router-link>

      <router-link
        class="abas"
        to="/dash/perdidos"
        v-on:click.native="handleChangePage(1)"
        :class="{ ativo: isActive[1] }"
      >
        <!-- Cadastrar item perdido -- Segunda aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Cadastrar item perdido</b-col
          >
        </b-row>
      </router-link>

      <router-link
        class="abas"
        to="/dash/encontrados"
        v-on:click.native="handleChangePage(2)"
        :class="{ ativo: isActive[2] }"
      >
        <!-- Cadastrar item encontrado -- Terceira aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Cadastrar item encontrado</b-col
          >
        </b-row>
      </router-link>

      <router-link
        class="abas"
        to="/dash/buscar"
        v-on:click.native="handleChangePage(3)"
        :class="{ ativo: isActive[3] }"
      >
        <!-- Buscar item -- Quarta aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          
          <b-col class="abas_text" md="4"
            >Buscar Item</b-col
          >
        </b-row>
      </router-link>

      <router-link
        class="abas"
        to="/dash/aprovar"
        v-on:click.native="handleChangePage(4)"
        :class="{ ativo: isActive[4] }"
      >
        <!-- Aprovar itens -- Quinta aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Aprovar itens cadastrados</b-col
          >
        </b-row>
      </router-link>

       <router-link
        class="abas"
        to="/dash/cadastrados"
        v-on:click.native="handleChangePage(5)"
        :class="{ ativo: isActive[5] }"
      >
        <!-- Itens cadastrados -- Sexta aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Itens cadastrados</b-col
          >
        </b-row>
      </router-link>

       <router-link
        class="abas"
        to="/dash/editar-case"
        v-on:click.native="handleChangePage(6)"
        :class="{ ativo: isActive[6] }"
      >
        <!-- Editar cases -- Sétima aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Editar cases de sucesso</b-col
          >
        </b-row>
      </router-link>

       <router-link
        class="abas"
        to="/dash/novo-admin"
        v-on:click.native="handleChangePage(7)"
        :class="{ ativo: isActive[7] }"
      >
        <!-- Cadastrar novo admin -- Oitava aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Cadastrar novo admin</b-col
          >
        </b-row>
      </router-link>

       <router-link
        class="abas"
        to="/dash/devolvidos"
        v-on:click.native="handleChangePage(8)"
        :class="{ ativo: isActive[8] }"
      >
        <!-- Itens devolvidos -- Nona aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Itens devolvidos</b-col
          >
        </b-row>
      </router-link>

      
      <a @click="deslogar" class="abas" style="margin-top: auto; margin-bottom: 20px">
        <b-col class="abas_text_sair" md="4">SAIR</b-col>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "SideBar",
  data: function() {
    return {
      isActive: [0, 0, 0, 0, 0, 0, 0]
    };
  },
  created() {
    this.optionChange(this.$route.path);
  },
  methods: {
    ...mapActions({
      flipControladorSidebar: 'flipControladorSidebar'
    }),
    handleChangePage(index) {
      this.isActive = [0, 0, 0, 0, 0, 0, 0, 0];
      this.isActive[index] = 1;
    },
    optionChange(route) {
      this.isActive = [0, 0, 0, 0, 0, 0, 0, 0];
      switch (route) {
        case "/dash/cases":
          this.isActive[0] = 1;
          break;
        case "/dash/perdidos":
          this.isActive[1] = 1;
          break;
        case "/dash/encontrados":
          this.isActive[2] = 1;
          break;
        case "/dash/buscar":
          this.isActive[3] = 1;
          break;
        case "/dash/aprovar":
          this.isActive[4] = 1;
          break;
        case "/dash/cadastrados":
          this.isActive[5] = 1;
          break;
        case "/dash/editar-case":
          this.isActive[6] = 1;
          break;
        case "/dash/novo-admin":
          this.isActive[7] = 1;
          break;
        case "/dash/devolvidos":
          this.isActive[8] = 1;
          break;
        
      }
    },
     deslogar() {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters({
      getControladorSidebar: 'getControladorSidebar'
    })
  }
};
</script>

<style scoped lang="scss">

.row{
  margin-left: 0px !important;
  margin-right: 0px !important;
}
#sidebar-dash {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100vh;
  transition: all 0.5s cubic-bezier(0.54, -0.01, 1, 1.02);
}

.abas {
  max-width: 300px !important; 
  text-decoration: none !important;
  color: #e0dcd0 !important;
  transition: all 0.5s ease;
  border-radius: 0px 50px 50px 0px;
  animation: displayAnimation 0.9s ease-in;
}

.abas:hover {
  cursor: pointer;
  color: #222222 !important;
  background: #A6D1E6;
  .abas_text {
    font-weight: 400;
  }
}

.ativo {
  color: #222222 !important;
  background: #A6D1E6;
  .abas_text {
    font-weight: 600;
  }
}

.abas_text {
  left: -72px;
  padding: 5px 75px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500 !important;
  white-space: nowrap;
  animation: displayAnimation 0.9s ease-in;
}

.abas_text_sair {
  padding: 10px 50px;
}

.sideBarComponent {
  position: fixed;
}
</style>