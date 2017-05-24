import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },

  getters: {
    tripleCounter: state => {
      return state.counter * 3
    }
  },

  mutations: {
    increment: (state, num) => {
      state.counter += num
    }
  },

  actions: {
    ascyncDecrement: ({ commit }, ascyncNum) => {
      setTimeout(() => {
        commit('decrement', ascyncNum.by)
      }, ascyncNum.duration)
    }
  }
})
