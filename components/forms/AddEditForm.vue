<template>
  <div>
    <form autocomplete="off" class="w-full" @submit.prevent="listenChanges">
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
          @click.prevent="$router.push('/')"
        >
          Cancel
        </button>
      </div>
      <div class="mb-3 flex flex-col ml-36">
        <select
          v-model="data.category"
          name="category"
          class="
            p-3
            outline-none
            w-1/3
            bg-transparent
            font-semibold
            text-black
            border-b-2 border-gray-50
            mb-4
          "
          required
        >
          <option :selected="data.completed" value="Uncategorised">
            Uncategorised
          </option>
          <option :selected="data.completed" value="Groceries">
            Groceries
          </option>
          <option :selected="data.completed" value="Kids">Kids</option>
          <option :selected="data.completed" value="Work">Work</option>
          <option :selected="data.completed" value="Work">Socials</option>
        </select>
        <textarea
          v-model="data.title"
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
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'AddEditForm',
  props: {
    todo: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      data: {
        id: null,
        title: null,
        category: null,
        date: null,
        completed: false,
      },
    }
  },
  computed: {
    ...mapGetters({
      todos: 'todos/todos',
    }),
  },
  created() {
    this.fillForm()
  },
  methods: {
    ...mapActions({
      update: 'todos/update',
      add: 'todos/add',
    }),
    fillForm() {
      if (this.$route.params.id == null) return
      this.data.id = this.todo.id
      this.data.title = this.todo.title
      this.data.category = this.todo.category
      this.data.date = this.todo.date
      this.data.completed = this.todo.completed
    },
    listenChanges() {
      if (this.$route.params.id != null) {
        if (
          this.data.id === this.todo.id &&
          this.data.category === this.todo.category
        ) {
          return
        }
        this.updateTodo()
      } else {
        this.addTodo()
      }
    },
    updateTodo() {
      const todo = {
        id: this.todo.id,
        title: this.data.title,
        category: this.data.category,
        date: moment().format('MMMM Do YYYY'),
        completed: this.todo.completed,
      }
      this.update(todo)
    },
    addTodo() {
      const todo = {
        id: this.todos.length + 1,
        title: this.data.title,
        category: this.data.category,
        date: moment().format('MMMM Do YYYY'),
        completed: false,
      }
      this.add(todo)
    },
  },
}
</script>

<style></style>
