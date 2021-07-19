<template>
  <div class="mx-36 min-h-screen">
    <div class="mb-5">
      <form autocomplete="off" class="w-full" @submit.prevent="submitForm">
        <div class="mb-3 flex justify-between">
          <input
            v-model="newTodo.title"
            type="text"
            class="
              p-3
              bg-transparent
              outline-none
              border-b-2
              mr-2
              border-gray-50
              placeholder-gray-50
              w-2/3
            "
            required
            placeholder="Add todo item..."
          />
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
            "
            required
          >
            <option selected value="Uncategorised">Uncategorised</option>
            <option value="Groceries">Groceries</option>
            <option value="Kids">Kids</option>
            <option value="Work">Work</option>
          </select>
        </div>
        <div class="flex items-center justify-center">
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
              w-1/2
              transform
              focus:scale-95
            "
          >
            Add
          </button>
        </div>
      </form>
    </div>
    <to-do-card
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :completed.sync="todo.completed"
      @deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import moment from 'moment'
import ToDoCard from '../components/ToDoCard.vue'
export default {
  components: {
    ToDoCard,
  },
  data() {
    return {
      active: true,
      newTodo: {
        title: '',
        category: '',
      },
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
    }
  },
  methods: {
    submitForm() {
      const newItem = {
        title: this.newTodo.title,
        category: this.newTodo.category,
        date: moment().format('MMMM Do YYYY'),
        completed: false,
      }
      // this.todos.unshift(newItem)
      this.todos = [newItem, ...this.todos]
      this.newTodo.title = ''
      this.newTodo.category = ''
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
  },
}
</script>
