import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

const state = {};
const mutations = {};
const actions = {};
const getters ={};

// 对外暴露
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store;