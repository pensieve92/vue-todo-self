
export default {
    namespaced: true,
    state: { // computed부분에서 this.$store.state.todos 로 가져와서 사용한다.
        todos: [
            { id:1, text:'show me the money', checked: false},
            { id:2, text:'show me the money', checked: true}
        ]
    },
    mutations: {// state를 변경한다. this.$store.commit('ADD_TODO', value)로 호출해서 사욯한다.
        ADD_TODO(state, value) {
            state.todos.push({
                id:Math.random(),
                text: value,
                checked: false
            })
        },
        TOGGLE_TODO(state, todoId) {
            const findIndex = state.todos.findIndex(todo => todo.id === todoId);
            state.todos[findIndex]["checked"] = !state.todos[findIndex]["checked"]
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        }

    },
    actions: {// mutations에 상태변경을 요청한다. axios를 api서버를 호출하고, 그결과를 상태를 변경해준다.
        addTodo({commit}, value) {
            setTimeout(function (){
                commit("ADD_TODO", value);
            }, 500)
        },
        toggleTodo({commit}, value) {
            setTimeout(function () {
                commit('TOGGLE_TODO', value);
            }, 500);
        },
        deleteTodo({commit}, value) {
            setTimeout(function () {
                commit('DELETE_TODO', value);
            }, 500);
        }
    },
    getters: {// computed 자주쓰는 연산결과를 표시?
        completedTodoNumber:function(state){
            return state.todos.filter(todo => todo.checked === true).length
        }
    }
}