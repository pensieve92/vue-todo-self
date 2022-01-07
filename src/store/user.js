import axios from "axios";

export default {
    namespaced: true,
    state: { // computed부분에서 this.$store.state.todos 로 가져와서 사용한다.
        users: [],

    },
    mutations: {// state를 변경한다. this.$store.commit('ADD_TODO', value)로 호출해서 사욯한다.
        SET_USERS(state, value) {
            state.users = value
        },
    },
    actions: {// mutations에 상태변경을 요청한다. axios를 api서버를 호출하고, 그결과를 상태를 변경해준다.
        getUsers({commit}){
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data)
            });
        },
    },
    getters: {// computed 자주쓰는 연산결과를 표시?

    }
}