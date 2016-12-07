<template>
  <div id="page-eventBus">
    <new-todo></new-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
  import NewTodo from './newTodo.vue'
  import TodoList from './todoList.vue'

  export default {
    name: 'app',
    components: {
      NewTodo,
      TodoList
    }
  }
</script>
