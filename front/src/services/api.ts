import axios from "axios";

const API = "https://word-api-hmlg.vercel.app";

const apiClient = axios.create({
  baseURL: API,
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

export default apiClient;