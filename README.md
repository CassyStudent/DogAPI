# 🐕 Dog Breeds Explorer - Vue 3 App

A modern, responsive Vue 3 application that showcases dog breeds using the Dog CEO API. Built with Composition API, Vue Router, and TanStack Query for optimal data fetching and caching.

## ✨ Features

- **Breed Overview Page**: Browse all dog breeds in a beautiful grid/card layout
- **Breed Detail Page**: View random images of specific breeds with smooth loading animations
- **Smart Caching**: TanStack Query handles caching and data synchronization
- **Loading States**: Skeleton loaders and spinners for better UX
- **Error Handling**: Friendly error messages with retry functionality
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Transitions**: Page navigations and image loading with fade transitions
- **Console Logging**: API calls logged to console for debugging

## 🛠️ Tech Stack

- **Vue 3** - Modern reactive framework with Composition API
- **Vue Router** - Client-side routing with two main routes
- **TanStack Query** - Server state management and caching
- **Axios** - HTTP client for API requests
- **Vite** - Lightning-fast build tool and dev server
- **Dog CEO API** - Free, no-auth-required dog breed data

## 📋 Project Structure

```
src/
├── components/
│   ├── BreedCard.vue          # Individual breed card component
│   ├── LoadingState.vue       # Loading spinner component
│   └── ErrorState.vue         # Error display component
│
├── pages/
│   ├── BreedsView.vue         # Breed overview/list page
│   └── BreedDetailView.vue    # Single breed detail page
│
├── router/
│   └── index.js               # Vue Router configuration
│
├── services/
│   └── dogApi.js              # Dog CEO API service with axios
│
├── composables/
│   └── useBreeds.js           # TanStack Query hooks for data fetching
│
├── App.vue                    # Root component
└── main.js                    # Application entry point

vite.config.js                 # Vite configuration
index.html                     # HTML template
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will automatically open in your browser at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 🌐 Application Routes

- **`/`** - Breed Overview Page
  - Displays all dog breeds in a responsive grid
  - Click any breed to navigate to its detail page
  - Shows loading spinner while fetching breeds

- **`/breed/:breedName`** - Breed Detail Page
  - Shows a random image for the selected breed
  - Displays breed name and image
  - "Show Another Image" button to refresh with a new random image
  - Browser refresh works correctly (caching respects this)
  - Back button to return to overview

## 🔄 Data Fetching & Caching

### TanStack Query Configuration

```javascript
// Breed list - cached for 1 hour, garbage collected after 24 hours
useAllBreeds()

// Breed images - cached for 30 minutes, garbage collected after 24 hours
useBreedImage(breed)
```

**Caching Behavior:**
- Breed list stays cached during your session
- Revisiting the overview page won't refetch unnecessarily
- Visiting the same breed multiple times shows the cached image
- After a full browser refresh, a new random image is fetched

## 🐕 API Endpoints Used

- **Get all breeds**: `https://dog.ceo/api/breeds/list/all`
- **Get random breed image**: `https://dog.ceo/api/breed/{breed}/images/random`

All API calls are logged to the browser console for debugging.

## 💻 Development

### Key Technologies Explained

**Vue 3 Composition API**
```javascript
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      console.log('Component mounted')
    })
  }
}
```

**TanStack Query (React Query for Vue)**
```javascript
const { data, isLoading, isError, refetch } = useQuery({
  queryKey: ['breeds'],
  queryFn: fetchBreeds
})
```

**Vue Router**
```javascript
// Navigate programmatically
router.push(`/breed/${breedName}`)

// Access route params
const breedName = route.params.breedName
```

## 🎨 UI/UX Features

- **Gradient Background**: Purple to blue gradient for modern look
- **Card-based Layout**: Hover effects with elevation and scale
- **Skeleton Loader**: Placeholder animation while image loads
- **Fade Transitions**: Smooth opacity transitions between routes and images
- **Responsive Grid**: Auto-adjusts columns based on screen size
- **Mobile Optimized**: Touch-friendly buttons and layouts

## 🧪 Testing the App

1. **Load Overview**: Visit `/` - should show all dog breeds loading
2. **Click a Breed**: Should navigate to `/breed/german-shepherd` (or your choice)
3. **Refresh Page**: Image should remain (cached) or change (if cache expired)
4. **Show Another Image**: Click button to fetch new random image
5. **Back to Home**: Click back button to return to overview (no refetch)
6. **Check Console**: Open DevTools to see API call logs

## 📦 Dependencies

```json
{
  "vue": "^3.5.34",
  "vue-router": "^4.3.2",
  "@tanstack/vue-query": "^5.40.0",
  "axios": "^1.6.2"
}
```

## 🔍 Console Output

The app logs all API calls to help with debugging:

```javascript
// In dogApi.js
console.log('Fetched all breeds:', response.data)
console.log(`Fetched random image for ${breed}:`, response.data)

// In BreedsView.vue
console.log('BreedsView mounted - Breeds data:', data.value)

// In BreedDetailView.vue
console.log(`BreedDetailView mounted for breed: ${breedName.value}`)
```

## 🌟 Features Breakdown

### ✅ Core Requirements Met

- [x] Vue 3 with Composition API
- [x] Vue Router with 2+ routes (Overview, Detail)
- [x] TanStack Query for data fetching & caching
- [x] Dog CEO API integration with axios
- [x] Console logging for API calls
- [x] Card/grid layout (not plain ul/li)
- [x] Loading states with spinner & skeleton loader
- [x] Error states with friendly messages
- [x] Smooth transitions for pages and images
- [x] Responsive design
- [x] Browser refresh compatibility
- [x] Polished, modern UI

### 📱 Responsive Breakpoints

- **Desktop**: 1400px max-width, multi-column grid
- **Tablet**: Adjusted font sizes and spacing
- **Mobile**: 2-column grid, single-column navigation

## 📝 Notes

- No API key required - Dog CEO API is free and public
- All data is fetched client-side in the browser
- No backend server needed
- CORS is handled by Dog CEO API
- Cache keys ensure data consistency across components

## 🎓 Learning Resources

- [Vue 3 Documentation](https://vuejs.org)
- [Vue Router Guide](https://router.vuejs.org)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Axios HTTP Client](https://axios-http.com)
- [Vite Guide](https://vitejs.dev)
- [Dog CEO API Docs](https://dog.ceo/dog-api/)

## 📄 License

ISC

---

**Built with ❤️ using Vue 3**
