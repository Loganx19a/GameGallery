import axios from 'axios';

// Access the environment variable using import.meta.env
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

if (!apiKey) {
  throw new Error('API key is missing! Please add it to your .env file.');
}

// Create an axios instance with a custom configuration
const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: apiKey
  }
});

export default apiClient;
