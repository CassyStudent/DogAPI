<template>
  <div class="breeds-view">
    <h1>Dog Breeds</h1>
    
    <LoadingState v-if="isLoading" message="Loading..." />
    <ErrorState v-else-if="isError" title="Error" message="Failed to load breeds." />
    
    <div v-else class="breeds-list">
      <BreedCard v-for="breed in data" :key="breed" :breed="breed" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAllBreeds } from '../composables/useBreeds'
import BreedCard from '../components/BreedCard.vue'
import LoadingState from '../components/LoadingState.vue'
import ErrorState from '../components/ErrorState.vue'

const { data, isLoading, isError } = useAllBreeds()

onMounted(() => {
  console.log('BreedsView mounted - Breeds data:', data.value)
})
</script>

<style scoped>
.breeds-view {
  max-width: 700px;
  margin: 0 auto;
  animation: slideUp 0.6s ease-out;
}

h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  color: white;
  font-weight: 800;
  letter-spacing: -1px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.breeds-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>