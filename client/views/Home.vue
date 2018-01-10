<template>
  <div class="page">
  <todolist></todolist>
  <createtodo></createtodo>
  </div>
</template>

<script>
import todolist from 'components/TodoList'
import createtodo from 'components/CreateTodo'

export default {
  components:{
    todolist,
    createtodo
  }
}
</script>
