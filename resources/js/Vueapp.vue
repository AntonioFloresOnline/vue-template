<template>
  <div id="vueApp">
    <h1>I am a vue app!</h1>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "VueInstance"
};
</script>

<style lang="scss" >
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
