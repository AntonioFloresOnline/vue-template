import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: [
      {
        title: "This is data title 1",
        description: "Description, Lorem Ipsum"
      },
      {
        title: "This is data title 2",
        description: "Description, Dolor Sit Sammet"
      }
    ]
  },
  mutations: {
    addNewData(state, payload) {
      const newData = {
        title: payload.title,
        description: payload.description
      };
      this.state.data.push(newData);
    }
  }
});

export default store;
