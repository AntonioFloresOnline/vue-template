<template>
  <div>
    <p>I am a Vuex Output</p>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <p>{{item.title}}</p>
        <p>{{item.description}}</p>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VuexOutput",
  computed: {
    ...mapState(["data"])
  }
};
</script>
