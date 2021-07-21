<template>
  <div
    class="
      cursor-pointer
      card
      p-5
      flex
      bg-gray-50
      mb-1
      rounded
      drop-shadow-md
      hover:bg-blue-600 hover:bg-opacity-75 hover:text-white
    "
    :class="{ 'bg-red-400': todo.completed }"
  >
    <div class="flex items-center w-1/12">
      <input
        type="checkbox"
        class="cursor-pointer"
        :checked="todo.completed"
        @change="markComplete"
      />
    </div>
    <div class="flex flex-col font-medium w-10/12">
      <h1 class="mb-2" :class="{ 'line-through': todo.completed }">
        {{ todo.title.substring(0, 20) + '...' }}
      </h1>
      <div class="flex text-gray-500">
        <small class="mr-5 text-green-500">{{ todo.category }}</small>
        <small>{{ todo.date }}</small>
      </div>
    </div>
    <div
      class="w-1/12 flex justify-end items-center cursor-pointer"
      @click="deleteThisTodo"
    >
      <font-awesome-icon :icon="['fas', 'trash']" :style="{ color: 'red' }" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ToDoCard',
  props: {
    todo: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions({
      toggleCompleted: 'todos/completed',
      deleteTodo: 'todos/delete',
    }),
    markComplete() {
      this.toggleCompleted(this.todo.id)
    },
    deleteThisTodo() {
      this.deleteTodo(this.todo.id)
    },
  },
}
</script>

<style></style>
