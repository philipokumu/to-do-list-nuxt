<template>
  <div>
    <to-do-card
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :completed.sync="todo.completed"
      @deleteTodo="deleteTodo"
    />
    <button
      class="
        fixed
        bottom-5
        right-5
        bg-blue-700
        p-5
        font-extrabold
        text-white
        rounded-full
        text-2xl
      "
      @click="$router.push('/addTodo')"
    >
      <font-awesome-icon :icon="['fas', 'plus']" />
    </button>
  </div>
</template>

<script>
import ToDoCard from '@/components/ToDoCard.vue'
import eventHub from '../plugins/eventHub'

export default {
  components: {
    ToDoCard,
  },
  data() {
    return {
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
  mounted() {
    eventHub.$on('addTodo', (newItem) => {
      this.addTodo(newItem)
    })
  },
  beforeDestroy() {
    // removing eventBus listener
    eventHub.$off('addTodo')
  },
  methods: {
    addTodo(newItem) {
      // eslint-disable-next-line no-console
      // console.log(newItem)
      newItem.id = this.todos.length
      this.todos = [newItem, ...this.todos]
      // eslint-disable-next-line no-console
      console.log(this.todos)
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
  },
}
</script>
