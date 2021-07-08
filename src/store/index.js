import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "",
    },
    mutations: {
        ["updateTitle"](state, data) {
            state.title = data;
        },
    },
    actions: {},
});
