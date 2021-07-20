<template>
  <div
    class="
      bg-gradient-to-r
      from-purple-400
      via-pink-500
      to-red-500
      min-h-screen
      flex flex-col
      justify-center
    "
  >
    <Header class="z-10" />

    <div class="mx-36 min-h-screen mt-6">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
}
</script>

<style></style>
