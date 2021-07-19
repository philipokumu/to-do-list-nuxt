<template>
  <div
    class="card p-5 flex bg-gray-50 mb-1 rounded drop-shadow-md"
    :class="{ 'bg-red-400': todo.completed }"
  >
    <div class="flex items-center w-1/12">
      <input
        type="checkbox"
        class="cursor-pointer"
        :checked="todo.completed"
        @change="markComplete()"
      />
    </div>
    <div class="flex flex-col font-medium w-10/12">
      <h1 class="mb-2" :class="{ 'line-through': todo.completed }">
        {{ todo.title }}
      </h1>
      <div class="flex text-gray-500">
        <small class="mr-5 text-green-500">{{ todo.category }}</small>
        <small>{{ todo.date }}</small>
      </div>
    </div>
    <div
      class="w-1/12 flex justify-end items-center cursor-pointer"
      @click="$emit('deleteTodo', todo.id)"
    >
      <font-awesome-icon :icon="['fas', 'trash']" :style="{ color: 'red' }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoCard',
  props: {
    todo: {
      type: Object,
      default: null,
    },
  },
  methods: {
    markComplete() {
      if (this.todo.completed) this.$emit('update:completed', false)
      else {
        this.$emit('update:completed', true)
      }
    },
  },
}
</script>

<style></style>
