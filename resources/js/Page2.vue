<template>
  <div>
    <h2>I am the page 2.</h2>
    <ComponentPage2 />
    <p>Lorem Ipsum Dolor Site Sammet!</p>
    <router-link to="/">Go to page 1</router-link>
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
