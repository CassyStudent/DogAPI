<template>
  <router-link :to="`/breed/${breed}`" class="breed-card">
    <div class="card-content">
      <span class="breed-icon">🐶</span>
      <span class="breed-name">{{ formatBreedName(breed) }}</span>
      <span class="arrow">→</span>
    </div>
  </router-link>
</template>

<script setup>
defineProps({ breed: { type: String, required: true } })

const formatBreedName = (breed) => {
  return breed.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}
</script>

<style scoped>
.breed-card {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 1rem 1.5rem;
  margin-bottom: 0.75rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.5s ease-out backwards;
}

.breed-card:nth-child(1) { animation-delay: 0.05s; }
.breed-card:nth-child(2) { animation-delay: 0.1s; }
.breed-card:nth-child(3) { animation-delay: 0.15s; }
.breed-card:nth-child(n+4) { animation-delay: 0.2s; }

.card-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.breed-icon {
  font-size: 1.5rem;
}

.breed-name {
  flex: 1;
  font-weight: 500;
  color: #333;
}

.arrow {
  color: #667eea;
  font-weight: bold;
  opacity: 0;
  transition: all 0.3s ease;
}

.breed-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  background: rgba(255, 255, 255, 1);
}

.breed-card:hover .arrow {
  opacity: 1;
  transform: translateX(4px);
}
</style>