<template>
  <div id="vueApp" class="demo-layout">
    <AppHeader />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./layout_components/AppHeader";
import AppFooter from "./layout_components/AppFooter";

export default {
  name: "VueInstance",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
#productsApp {
  min-height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
