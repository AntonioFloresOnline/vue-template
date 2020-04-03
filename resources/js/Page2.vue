<template>
  <div class="page">
    <h2 class="page-title">I am the page 2.</h2>
    <ComponentPage2 />
    <div class="form-group">
      <router-link to="/">Go to page 1</router-link>
    </div>
  </div>
</template>

<script>
import ComponentPage2 from "./page2/components/ComponentPage2";

export default {
  name: "Page2",
  components: {
    ComponentPage2
  }
};
</script>
