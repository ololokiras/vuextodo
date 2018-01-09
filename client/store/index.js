import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  todos:[{
          title:'todo a',
          project:'react',
          done:false,
        },
        {
          title:'todo b',
          project:'node',
          done:true,
        },
        {
          title:'todo c',
          project:'vue',
          done:false,
        },
        {
          title:'todo d',
          project:'hue',
          done:true,
        }]
}

const mutations = {
  ADD(todo){
    state.todos.push(todo);
  },
  REMOVE(todo){
    state.todos.splice(state.todos.indexOf(todo),1)
  },

  COMPLETED(todo){
    state.todos[state.todos.indexOf(todo)].done=true
  }

}

const actions = {

  completeTodo(todo){
    store.commit('COMPLETED',todo)
  },

  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
