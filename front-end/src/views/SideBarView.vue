<template>
  <div>
    <SideBar/>
    <div
      class="router-container marginSideBar300"
    >
      </div>
      <transition name="fade" mode="out-in">
        <router-view id="router-view" />
      </transition>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "SideBarView",
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
#router-view {
  background: #e0dcd0;
}

.router-container {
  background: #e0dcd0;
  min-height: 100vh;
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

.marginSideBar300 {
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  transition: all 0.5s cubic-bezier(0.54, -0.01, 1, 1.02);
}

</style>

<style lang="scss" scoped>

@keyframes displayAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
