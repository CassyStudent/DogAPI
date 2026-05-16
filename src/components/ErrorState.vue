<template>
  <div class="error">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Error' },
  message: { type: String, default: 'Something went wrong' }
})
</script>

<style scoped>
.error { padding: 1rem 0; color: #666; }
h2 { color: #d32f2f; margin: 0 0 0.5rem 0; font-size: 1.2rem; }
p { margin: 0; }
</style>