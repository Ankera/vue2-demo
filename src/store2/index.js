import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 1,
};

export default new Vuex.Store({
  state,
  mutations: {
    add: (state, num) => {
      state.count += num;
    },
    reduce: (state) => {
      state.count--;
    },
  },
  getters: {
    countStr: (state) => {
      return `${state.count} + px`;
    },
  },
  actions: {
    addAction: (context) => {
        context.commit('add', 3)

        setTimeout(() => {
            context.commit('reduce')
        }, 1000)
    },
    reduceAction: ({commit}) => {
        commit('reduce')
    }
  }
});
