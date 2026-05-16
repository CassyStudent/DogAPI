import axios from 'axios'

const API_BASE = 'https://dog.ceo/api'

const dogApi = {
  async getAllBreeds() {
    try {
      const response = await axios.get(`${API_BASE}/breeds/list/all`)
      console.log('Fetched all breeds:', response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching breeds:', error)
      throw error
    }
  },

  async getRandomBreedImage(breed) {
    try {
      const response = await axios.get(`${API_BASE}/breed/${breed}/images/random`)
      console.log(`Fetched random image for ${breed}:`, response.data)
      return response.data
    } catch (error) {
      console.error(`Error fetching image for ${breed}:`, error)
      throw error
    }
  }
}

export default dogApi