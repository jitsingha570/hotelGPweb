import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hotelgpdeploy-backend-update.onrender.com/api', // replace this with your actual base URL if different
});

export default api;
