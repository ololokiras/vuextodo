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
  CREATE(state,todo){
    state.todos.push(todo);
  },

  REMOVE(state,todo){
    state.todos.splice(state.todos.indexOf(todo),1);
  },

  COMPLETED(state,todo){
    state.todos[state.todos.indexOf(todo)].done=true;
  }

}

const actions = {
  completeTodo({commit},todo){
    commit('COMPLETED',todo);
  },
  
  removeTodo({commit},todo){
    commit('REMOVE',todo);
  },

  createTodo({commit}, todo){
    commit('CREATE',todo);
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
