import axios from "axios";
const baseURL = import.meta.env.MODE === 'development'
  ? 'http://localhost:4000' // Your local backend URL
  : 'https://chat-app-backend-1vh3.onrender.com'; // Your deployed backend URL

export const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true, // If you're using cookies for sessions
});
