<template>
  <div class="mb-5 sticky top-20">
    <add-edit-form :todo="todo" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddEditForm from '../../components/forms/AddEditForm.vue'
export default {
  components: { AddEditForm },
  computed: {
    ...mapGetters({
      todo: 'todos/todo',
    }),
  },
  created() {
    this.getTodo(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      getTodo: 'todos/view',
    }),
  },
}
</script>

<style></style>
