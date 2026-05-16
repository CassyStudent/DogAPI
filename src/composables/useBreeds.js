import { useQuery } from '@tanstack/vue-query'
import dogApi from '../services/dogApi'

export function useAllBreeds() {
  return useQuery({
    queryKey: ['breeds'],
    queryFn: async () => {
      const response = await dogApi.getAllBreeds()
      const breeds = Object.keys(response.message)
        .filter(breed => response.message[breed].length === 0)
        .sort()
      return breeds
    },
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24
  })
}

export function useBreedImage(breed) {
  return useQuery({
    queryKey: ['breed-image', breed],
    queryFn: () => dogApi.getRandomBreedImage(breed),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!breed
  })
}