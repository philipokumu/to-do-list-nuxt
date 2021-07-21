<template>
  <div>
    <to-do-card v-for="(todo, index) in todos" :key="index" :todo="todo" />
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
      @click="$router.push('/add')"
    >
      <font-awesome-icon :icon="['fas', 'plus']" />
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoCard from '@/components/ToDoCard.vue'

export default {
  components: {
    ToDoCard,
  },
  computed: {
    ...mapGetters({
      todos: 'todos/todos',
    }),
  },
}
</script>
