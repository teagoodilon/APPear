<template>
  <div style="background-color:#fff">
    <SideBar/>
    <div
      class="router-container marginSideBar300"
      :class="{ marginSideBar95: controlador }"
    >
      <div class="logoAssistek">
        <img
          :class="{ logoOpacity: !controlador }"
          class="logo_assistek"
          alt="Logo Assistek"
         
        />
      </div>
      <transition name="fade" mode="out-in">
        <router-view id="router-view" />
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "SideBarView",
  data() {
    return {
      controlador: false,
    };
  },
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
#router-view {
  height: fit-content;
  width: 100%;
  background: #f8f8fb;
}

.router-container {
  background: #f8f8fb;
  min-height: 100vh;
  border-top-left-radius: 50px;
  box-shadow: 0px 3.03963px 15.1982px rgba(0, 0, 0, 0.25);
}

.fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease;
}

.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.logoAssistek{
  display: flex;
  width: 100%;
}

.marginSideBar300 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-left: 300px;
  transition: all 0.5s cubic-bezier(0.54, -0.01, 1, 1.02);
}

</style>

<style lang="scss" scoped>

.logoOpacity {
  opacity: 0;
}


@keyframes displayAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
