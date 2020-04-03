<template>
  <div class="component">
    <h3 class="component-title">
      I am a Vuex Input, add some data.
    </h3>
    <div class="form-group">
      <label for="itemTitle">Title for new Item in data: </label>
      <input v-model="newItem.title" id="itemTitle" type="text" />
    </div>

    <div class="form-group">
      <label for="taskDescription">Description for new task: </label>
      <input v-model="newItem.description" id="itemDescription" type="text" />
    </div>

    <div class="form-group">
      <button @click="addData">Create Task Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuexInput",
  data() {
    return {
      newItem: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    addData() {
      if (this.newItem.title != "" && this.newItem.description != "") {
        this.$store.commit("addNewData", this.newItem);
        this.newItem.title = "";
        this.newItem.description = "";
      } else {
        alert("Please fill out the mandatory fields. ");
      }
    }
  }
};
</script>
