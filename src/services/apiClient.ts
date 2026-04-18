import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-url.com/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;