<template>
  <div class="page">
    <h2 class="page-title">I am the page 1.</h2>
    <ComponentPage1 />
    <router-link to="/page2">Go to page 2</router-link>
    <VuexOutput />
    <VuexInput />
  </div>
</template>

<script>
import ComponentPage1 from "./page1/components/ComponentPage1";
import VuexInput from "./page1/components/VuexInput";
import VuexOutput from "./page1/components/VuexOutput";

export default {
  name: "Page1",
  components: {
    ComponentPage1,
    VuexInput,
    VuexOutput
  }
};
</script>
