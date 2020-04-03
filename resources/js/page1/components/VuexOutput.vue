<template>
  <div class="component">
    <h3 class="component-title">
      I am a Vuex Output
    </h3>
    <ul class="app-list">
      <li v-for="(item, index) in data" :key="index">
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
        <button @click="removeItem(index)">Remove Item</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VuexOutput",
  computed: {
    ...mapState(["data", "alvison"])
  },
  methods: {
    removeItem(index) {
      if (confirm("okay?")) {
        this.$store.commit("removeData", index);
      }
    }
  }
};
</script>
