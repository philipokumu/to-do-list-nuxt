<template>
  <div>
    {{ todos }}
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
  created() {
    eventHub.$on('addTodo', (newItem) => {
      newItem.id = this.todos.length
      this.todos = [newItem, ...this.todos]
      // eslint-disable-next-line no-console
      console.log(this.todos)
      // this.todos.unshift(newItem)
    })
    // eslint-disable-next-line no-console
    // console.log(this.todos.length)
    // eslint-disable-next-line no-console
    // console.log(this.todos.length)
  },
  methods: {
    // addTodo(newItem) {
    // const newItem = {
    //   id: this.newTodo.length,
    //   title: this.newTodo.title,
    //   category: this.newTodo.category,
    //   date: moment().format('MMMM Do YYYY'),
    //   completed: false,
    // }
    // this.todos.unshift(newItem)
    // this.todos = [newItem, ...this.todos]
    // this.newTodo.title = ''
    // this.newTodo.category = ''
    // },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
  },
}
</script>
