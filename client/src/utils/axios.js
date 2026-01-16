import axios from "axios";

export const BASE_URL = "https://blog-app-bauq.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
