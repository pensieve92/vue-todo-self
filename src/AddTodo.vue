<template>
  <input
      type="text"
      v-model="todoText"
      @keyup.enter="addTodo"
  />
</template>
<script>
export default {
  name: 'AddTodo',
  data: function(){
    return {
      todoText: ''
    }
  },
  props: {

  },
  methods: {
    addTodo: function (e){
      // this.$store.dispatch('addTodo', e.target.value);
      this.$store.dispatch('todo/addTodo', e.target.value);
      // this.$store.commit('ADD_TODO', e.target.value)
      // this.$emit('add-todo', e.target.value)
      this.todoText = '';
    }
  }
}
</script>