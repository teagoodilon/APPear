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
        <!-- Itens cadastrados -- Quinta aba-->
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
        <!-- Editar cases -- Quinta aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Editar cases</b-col
          >
        </b-row>
      </router-link>

       <router-link
        class="abas"
        to="/dash/novo-admin"
        v-on:click.native="handleChangePage(7)"
        :class="{ ativo: isActive[7] }"
      >
        <!-- Cadastrar novo admin -- Quinta aba-->
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
        <!-- Itens devolvidos -- Quinta aba-->
        <b-row class="align-items-center menu-box px-4 py-2">
          <b-col class="abas_text" md="4"
            >Itens devolvidos</b-col
          >
        </b-row>
      </router-link>

      
      <a @click="deslogar" class="abas" style="margin-top: auto; margin-bottom: 20px">
        <!-- Sair-- Oitava aba-->
        <b-row class="aba_sair px-4 py-2">
          <b-col class="espaco_icone" md="3">
            <svg
              width="30"
              height="30"
              viewBox="0 0 87 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="icones_fill"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.7018 0.866806H77.4028C82.1458 0.866806 86.003 4.72401 86.003 9.46703V69.6686C86.003 74.4116 82.1458 78.2688 77.4028 78.2688H38.7018C33.9588 78.2688 30.1016 74.4116 30.1016 69.6686V52.4682H38.7018V69.6686H77.4028V9.46703H38.7018V26.6675H30.1016V9.46703C30.1016 4.72401 33.9588 0.866806 38.7018 0.866806ZM21.5006 35.268H60.2016V43.8682H21.5006V56.7686L0 39.5681L21.5006 22.3677V35.268Z"
                fill="black"
              />
            </svg>
          </b-col>
          <b-col class="abas_text" md="4"
            >Sair</b-col
          >
        </b-row>
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
      this.$router.push("/login");
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
#sidebar-dash {
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 300px;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  transition: all 0.5s cubic-bezier(0.54, -0.01, 1, 1.02);
}

.icone_menu {
  cursor: pointer;
  margin-left: -15px;
  animation: displayAnimation 0.9s ease-in;
}

.rotate_menu {
  margin-left: 30px;
  transform: rotate(180deg);
  animation: displayAnimation 0.9s ease-in;
}

.logo_assistek {
  width: 170px;
  left: 0px;
  z-index: 30;
  position: fixed;
  margin-left: 96px;
  margin-top: -6px;
  transition: all 0.5s ease;
  animation: displayAnimation 0.9s ease-in;
}

.abas {
  display: block;
  margin-right: 10px;
  border-radius: 0px 50px 50px 0px;
  text-decoration: none !important;
  color: #181717 !important;
  transition: all 0.5s ease;
}

.icones {
  transition: all 0.5s ease;
  animation: displayAnimation 0.9s ease-in;
}

.abas:hover {
  color: #e5592d !important;
  background: #fae8e6;
  .abas_text {
    font-weight: 600;
  }
  .icones {
    stroke: #e5592d !important;
  }
  .icones_fill {
    fill: #e5592d !important;
  }
}

.ativo {
  color: #e5592d !important;
  background: #fae8e6;
  .abas_text {
    font-weight: 600;
  }
  .icones {
    stroke: #e5592d !important;
  }
  .icones_fill {
    fill: #e5592d !important;
  }
}

.abas_text {
  font-size: 19px;
  font-family: Inter;
  font-weight: 300;
  white-space: nowrap;
  margin-left: -15px;
  animation: displayAnimation 0.9s ease-in;
}

</style>

<style lang="scss">


.sideCollapse {
  display: none;
}

.sideBarComponent {
  text-align: left;
  position: fixed;
  z-index: 1;
}

.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.aba_sair {
  cursor: pointer;
  align-items: center;
}
</style>
