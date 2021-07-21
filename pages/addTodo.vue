<template>
  <div class="mb-5 sticky top-20">
    <form autocomplete="off" class="w-full" @submit.prevent="submitForm">
      <div class="flex items-center justify-evenly">
        <button
          class="
            p-2
            rounded
            bg-gradient-to-r
            from-green-400
            to-blue-500
            text-white
            font-semibold
            text-lg
            focus:from-pink-500 focus:to-yellow-500
            w-1/3
            transform
            focus:scale-95
          "
        >
          Add
        </button>
        <button
          class="
            p-2
            rounded
            bg-gradient-to-r
            from-yellow-400
            to-red-500
            text-white
            font-semibold
            text-lg
            focus:from-pink-500 focus:to-yellow-500
            w-1/3
            transform
            focus:scale-95
          "
          @click="$router.push('/')"
        >
          Cancel
        </button>
      </div>
      <div class="mb-3 flex flex-col ml-36">
        <select
          v-model="newTodo.category"
          name="category"
          class="
            p-3
            outline-none
            w-1/3
            bg-transparent
            text-gray-400
            border-b-2 border-gray-50
            mb-4
          "
          required
        >
          <option value="Uncategorised">Uncategorised</option>
          <option value="Groceries">Groceries</option>
          <option value="Kids">Kids</option>
          <option value="Work">Work</option>
        </select>
        <textarea
          v-model="newTodo.title"
          name="title"
          cols="30"
          rows="10"
          class="
            p-3
            bg-transparent
            outline-none
            border-b-2
            mr-2
            border-gray-50
            placeholder-gray-50
            text-white
            w-2/3
          "
          required
          placeholder="Add todo item..."
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      newTodo: {
        title: '',
        category: 'uncategorised',
      },
    }
  },
  computed: {
    ...mapGetters({
      todos: 'todos/todos',
    }),
  },
  methods: {
    ...mapActions({
      addTodo: 'todos/add',
    }),
    submitForm() {
      const newTodo = {
        id: this.todos.length,
        title: this.newTodo.title,
        category: this.newTodo.category,
        date: moment().format('MMMM Do YYYY'),
        completed: false,
      }
      this.addTodo(newTodo)
    },
  },
}
</script>

<style></style>
