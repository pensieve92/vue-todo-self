<template>
  <div>
    <h2> User List</h2>
    <div v-for="user in users" :key="user.id">
      {{user.name}}
    </div>
  </div>

</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: "UserList",
  created() {
    return this.getUsers();
  },
  computed: {
    // users: function (){
    //   return this.$store.state.users
    // }
    // ...mapState({users: 'users'})
    ...mapState({users: state => state.user.users})
  },
  methods: {
    // getUsers: function () {
    //   this.$store.dispatch('getUsers');
    // }
    // ...mapActions(['getUsers'])
    ...mapActions('user', ['getUsers'])
  }
}
</script>

<style scoped>

</style>