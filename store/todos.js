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
  todo: null,
})

export const getters = {
  todos: (state) => state.todos,
  todo: (state) => state.todo,
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
  view({ commit }, todoId) {
    try {
      commit('VIEW_TODO', todoId)
    } catch (error) {
      console.log(error)
    }
  },
  update({ commit }, todo) {
    try {
      commit('UPDATE_TODO', todo)
      this.$router.push({ path: '/' })
    } catch (error) {
      console.log(error)
    }
  },
  completed({ commit }, todoId) {
    try {
      commit('TOGGLE_COMPLETED_STATUS', todoId)
    } catch (error) {
      console.log(error)
    }
  },
  delete({ commit }, todoId) {
    try {
      commit('DELETE_TODO', todoId)
    } catch (error) {
      console.log(error)
    }
  },
}
export const mutations = {
  ADD_TODO(state, payload) {
    state.todos = [payload, ...state.todos]
  },
  TOGGLE_COMPLETED_STATUS(state, payload) {
    const ourTodo = state.todos.find((todo) => todo.id === parseInt(payload))
    ourTodo.completed = !ourTodo.completed
  },
  DELETE_TODO(state, payload) {
    state.todos = state.todos.filter((todo) => todo.id !== parseInt(payload))
  },
  VIEW_TODO(state, payload) {
    state.todo = state.todos.find((todo) => todo.id === parseInt(payload))
  },
  UPDATE_TODO(state, payload) {
    const ourTodo = state.todos.find((todo) => todo.id === parseInt(payload.id))
    ourTodo.title = payload.title
    ourTodo.category = payload.category
    ourTodo.date = payload.date
  },
}
