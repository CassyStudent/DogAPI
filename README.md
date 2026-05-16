A responsive Vue 3 app for browsing dog breeds using the Dog CEO API. Includes breed overview pages, random breed images, caching, loading states, and smooth navigation.


Features

- Browse all dog breeds in a card/grid layout
- View random images per breed
- Smart caching with TanStack Query
- Loading & error states
- Responsive design with smooth transitions


Tech Stack

- Vue 3 + Composition API
- Vue Router
- TanStack Query
- Axios
- Vite


Run the App

1.npm install
2.npm run dev

Routes
/ → All breeds overview
/breed/:breedName → Breed detail page


API Used
https://dog.ceo/api/breeds/list/all
https://dog.ceo/api/breed/{breed}/images/random


Dependencies
{
  "vue": "^3",
  "vue-router": "^4",
  "@tanstack/vue-query": "^5",
  "axios": "^1"
  }
}
