<template>
  <div>
    <div v-if="this.$store.state.todos.length">
      <p>Законченные дела: {{this.done.length}}</p>
      <p>Текущие дела:{{this.current.length}}</p>
      <div v-for="todo in this.all">
        <todo :todo.sync='todo'></todo>
      </div>    
    </div>
    <div v-else>
      No todos
    </div>
  </div>
</template>

<script>
import todo from 'components/Todo'

export default {
  computed: {
    done() {
      return this.$store.state.todos.filter(todo => {return todo.done === true})
    },
    current(){
      return  this.$store.state.todos.filter(todo => {return todo.done === false})
    },
    all(){
      return this.$store.state.todos;
    }
  },

  components:{
    todo
  }
}
</script>

<style>
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
