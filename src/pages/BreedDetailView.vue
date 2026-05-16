<template>
  <div class="breed-detail-view">
    <LoadingState v-if="isLoading" message="Loading..." />
    <ErrorState v-else-if="isError" title="Error" message="Failed to load image." />
    
    <div v-else-if="data" class="detail-container">
      <router-link to="/" class="back-link">← Back</router-link>
      
      <h1>{{ formatBreedName(breedName) }}</h1>
      
      <div class="image-container">
        <div v-if="imageLoading" class="skeleton-loader"></div>
        <img 
          :src="data.message" 
          :alt="formatBreedName(breedName)"
          @load="imageLoading = false"
          class="breed-image"
          :style="{ display: imageLoading ? 'none' : 'block' }"
        />
      </div>
      
      <button @click="refreshImage" :disabled="isLoading" class="refresh-button">
        Show Another Image
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBreedImage } from '../composables/useBreeds'
import LoadingState from '../components/LoadingState.vue'
import ErrorState from '../components/ErrorState.vue'

const route = useRoute()
const breedName = computed(() => route.params.breedName)
const imageLoading = ref(true)

const { data, isLoading, isError, refetch } = useBreedImage(breedName.value)

const formatBreedName = (breed) => {
  return breed.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

const refreshImage = async () => {
  imageLoading.value = true
  await refetch()
}

onMounted(() => {
  console.log(`BreedDetailView mounted for breed: ${breedName.value}`)
})
</script>

<style scoped>
.breed-detail-view {
  max-width: 700px;
  margin: 0 auto;
  animation: slideUp 0.6s ease-out;
}

.back-link {
  text-decoration: none;
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 20px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(-4px);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
  font-weight: 800;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.image-container {
  width: 100%;
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.6s ease-out 0.1s backwards;
}

.skeleton-loader {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.3) 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.breed-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  animation: fadeIn 0.6s ease-out;
}

.refresh-button {
  width: 100%;
  padding: 1rem;
  color: rgb(137, 105, 255);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(137, 105, 255, 0.3);
}

.refresh-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(137, 105, 255, 0.4);
}

.refresh-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.detail-container {
  animation: slideUp 0.6s ease-out;
}
</style>