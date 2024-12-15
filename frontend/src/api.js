import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Pointing to your backend server
});

export default API;
