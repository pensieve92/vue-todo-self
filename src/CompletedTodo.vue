<template>
  <div>
    <h3>completed Todo : {{completedTodoNumber}}</h3>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: 'CompletedTodo',
  props: {

  },
  computed:{
    ...mapGetters('todo', ['completedTodoNumber'])
    // completedTodoNumber: function (){
    //   return this.$store.getters['todo/completedTodoNumber']
    // },
    // completedTodoNumber(){
    //   return this.$store.getters.completedTodoNumber
    // },
  },
}
</script>