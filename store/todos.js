/* eslint-disable no-console */
export const state = () => ({
  todos: [
    {
      id: 1,
      title: 'Eat my breakfast',
      category: 'uncategorised',
      date: 'Monday',
      completed: false,
    },
    {
      id: 2,
      title: 'Eat my Lunch',
      category: 'uncategorised',
      date: 'Tuesday',
      completed: true,
    },
    {
      id: 3,
      title: 'Eat my Supper',
      category: 'uncategorised',
      date: 'Wednesday',
      completed: false,
    },
    {
      id: 4,
      title: 'Eat my Dinner',
      category: 'uncategorised',
      date: 'Thursday',
      completed: false,
    },
    {
      id: 5,
      title: 'Eat my breakfast',
      category: 'uncategorised',
      date: 'Friday',
      completed: false,
    },
  ],
})

export const getters = {
  todos: (state) => state.todos,
  busy: (state) => state.busy,
}
export const actions = {
  add({ commit }, newTodo) {
    try {
      commit('ADD_TODO', newTodo)
      this.$router.push({ path: '/' })
    } catch (error) {
      console.log(error)
    }
  },
  completed({ commit, dispatch }, todoId) {
    try {
      commit('TOGGLE_COMPLETED_STATUS', todoId)
    } catch (error) {
      console.log(error)
    }
  },
  delete({ commit, dispatch }, todoId) {
    try {
      commit('DELETE_TODO', todoId)
    } catch (error) {
      console.log(error)
    }
  },
}
export const mutations = {
  ADD_TODO(state, payload) {
    // state.todos = [...state.todos, payload]
    state.todos = [payload, ...state.todos]
  },
  TOGGLE_COMPLETED_STATUS(state, payload) {
    const ourTodo = state.todos.find((todo) => todo.id === payload)
    ourTodo.completed = !ourTodo.completed
  },
  DELETE_TODO(state, payload) {
    state.todos = state.todos.filter((todo) => todo.id !== payload)
  },
}
