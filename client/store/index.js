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
    CHANGE_STATE: (state,todo) => {
      state.todos[state.todos.indexOf(todo)].done=!state.todos[state.todos.indexOf(todo)].done;
      /*let index=state.todos[state.todos.indexOf(todo)];
      state.todos[index].done=!state.todos[index].done;*/
    },
    PUSH: (state,todo) => state.todos.push(todo)
  },


  actions:{
    process({commit},{action, todo}){
      commit(action,todo);
    }
  },
})

export default store
