<template>
  <div class="mx-36">
    <h1 class="flex justify-center mb-5">To do List</h1>

    <div class="mb-5">
      <div class="mb-3 flex justify-between">
        <input
          type="text"
          class="
            p-3
            bg-transparent
            outline-none
            border-b-2
            mr-2
            border-gray-50
            text-white
            placeholder-gray-50
            w-2/3
          "
          placeholder="Add todo item..."
        />
        <select
          name="category"
          class="
            p-3
            outline-none
            w-1/3
            bg-transparent
            text-white
            border-b-2 border-gray-50
          "
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
            focus:scale-95
          "
        >
          Add To do
        </button>
      </div>
    </div>
    <span v-for="i in 10" :key="i">
      <to-do-card></to-do-card>
    </span>
  </div>
</template>

<script>
import ToDoCard from '../components/ToDoCard.vue'
export default {
  components: {
    ToDoCard,
  },
}
</script>
