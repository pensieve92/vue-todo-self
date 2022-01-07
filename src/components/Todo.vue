<template>
  <div>
    {{todo.checked}}
    <input
        type="checkbox"
        :checked="todo.checked"
        @click="toggleTodo"
    />
    <span>{{ todo.text }}</span>
    <button
      @click="deleteTodo"
    >
      Delete
    </button>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props: {
      todo:{
        type: Object,
        required: true
      }
  },
  methods:{
    toggleTodo:function(){
      this.$emit('toggle-todo', this.todo.id);
    },
    deleteTodo:function(){
      this.$emit('delete-todo', this.todo.id);
    }
  }

}
</script>
