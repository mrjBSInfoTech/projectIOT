import axios from "axios";

const API_URL = "http://localhost:5000/api/history";

// Create axios instance (will inherit token from authAPI interceptor)
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add request interceptor to include token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const saveHistory = async (data) => {
  const response = await api.post("/history/save", data);
  return response.data;
};

export const getHistory = async () => {
  const response = await api.get("/history/");
  return response.data;
};
