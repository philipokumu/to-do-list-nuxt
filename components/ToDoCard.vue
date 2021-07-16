<template>
  <div class="card p-5 flex bg-gray-50 mb-1 rounded shadow-md">
    <div class="flex justify-center items-center mr-2">
      <input type="checkbox" />
    </div>
    <div class="flex flex-col">
      <h1>Eat my breakfast</h1>
      <small>Uncategorised</small>
      <small>Monday</small>
    </div>
    <div>
      <FontAwesomeIcon icon="coffee"></FontAwesomeIcon>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'ToDoCard',
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style></style>
