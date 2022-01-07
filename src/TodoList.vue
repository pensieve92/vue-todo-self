<template>
  <div>
    <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-todo="toggleTodo"
        @delete-todo="deleteTodo"
    />
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';

import Todo from "./components/Todo"

export default {
  name: 'TodoList',
  components: {Todo},
  props: {
    // todos: {
    //   type: Array,
    //   required: true
    // },
  },
  computed: {
    // todos: function(){
    //   return this.$store.state.todos
    // }
    ...mapState({todos: state => state.todo.todos}) // store에 있는 값을 가져와준다..
    // mapState : 여러개를 리턴해야 되서 {}로 감싸는거 같다..
  },
  methods: {
    ...mapActions('todo', ['toggleTodo', 'deleteTodo']) // 알아서 dispatch 해준다.
    // actions  : 모듈화된 actions을 스프레드 해준다.

    // toggleTodo: function(value){
    //   this.$store.dispatch('toggleTodo', value);
    //   // this.$store.commit('TOGGLE_TODO', value);
    //   // this.$emit('toggle-todo', value);
    // },
    // deleteTodo: function(value){
    //   this.$store.dispatch('deleteTodo', value);
    //   // this.$store.commit('DELETE_TODO', value);
    //   // this.$emit('delete-todo', value);
    // }

  }
}
</script>