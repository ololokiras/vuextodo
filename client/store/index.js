import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

let store=new Vuex.Store({
  state :{
    todos:[]
  },

  plugins: [createPersistedState()],
  

  

  mutations:{
    REMOVE:(state,todo)    => state.todos.splice(todo,1),
    COMPLETE: (state,todo) => state.todos[state.todos.indexOf(todo)].done=true,
    PUSH: (state,todo) => state.todos.push(todo)
  },


  actions:{
    process({commit},{action, todo}){
      commit(action,todo);
    }
  },
  
 /* removeTodo({commit},todo){
    commit('REMOVE',todo);
  },

  createTodo({commit}, todo){
    commit('CREATE',todo);
  }*/

})

export default store
