<template>
  <div>
    <h1>todoList</h1>
    <CompletedTodo/>
    <AddTodo/>
    <TodoList/>
    <UserList/>
  </div>
</template>

<script>

import CompletedTodo from "./CompletedTodo";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import UserList from "./components/UserList";

export default {
  name: 'App',
  data: function() {
    return {
      // todos: [
      //   { id:1, text:'show me the money', checked: false},
      //   { id:2, text:'show me the money', checked: true}
      // ]
    }
  },
  components: {
    UserList,
    AddTodo,
    TodoList,
    CompletedTodo
  },
  methods:{
    // addTodo: function (value){
    //   this.$store.state.todos.push({
    //     id:Math.random(),
    //     text: value,
    //     checked: false
    //   })
    //   this.todoText = '';
    // },
    // toggleTodo: function (todoId){
    //   const findIndex = this.$store.state.todos.findIndex(todo => todo.id === todoId);
    //   this.$store.state.todos[findIndex]["checked"] = !this.$store.state.todos[findIndex]["checked"]
    // },
    // deleteTodo: function (todoId) {
    //   this.$store.state.todos = this.$store.state.todos.filter(todo => todo.id !== todoId);
    // }
  }
}
</script>

