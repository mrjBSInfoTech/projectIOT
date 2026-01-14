// src/api/userAPI.js
import axios from "axios";

// Create an Axios instance (you can set global options here)
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 5000, // wait max 5 seconds
});

// Helper function to handle errors globally
const handleError = (error) => {
  if (error.response) {
    // Server responded but with an error code
    console.error("🟥 Server error:", error.response.status, error.response.data);
    throw new Error(error.response.data.message || "Server responded with an error");
  } else if (error.request) {
    // Request was made but no response (server down, CORS issue, etc.)
    console.error("🟠 No response from server:", error.message);
    throw new Error("Server not responding. Please check your connection or try again later.");
  } else {
    // Something else happened
    console.error("⚠️ Request setup error:", error.message);
    throw new Error("An unexpected error occurred. Please try again.");
  }
};

// 🟢 Fetch all users
export const fetchAllUsers = async () => {
  try {
    console.log('Fetching all users...');
    const res = await api.get("/users/all");
    console.log('Users fetched:', res.data);
    return res;
  } catch (error) {
    console.error('Error in fetchAllUsers:', error);
    handleError(error);
  }
};

// 🔍 Fetch single user by ID
export const fetchUserById = async (id) => {
  try {
    console.log(`Fetching user with ID: ${id}`);
    const res = await api.get(`/users/${id}`);
    console.log('User fetched:', res.data);
    return res.data;
  } catch (error) {
    console.error('Error in fetchUserById:', error);
    handleError(error);
  }
};

// ➕ Add new user
export const addUser = async (userData) => {
  try {
    console.log('Adding new user:', userData);
    const res = await api.post("/users/add", userData);
    console.log('User added:', res.data);
    return res.data;
  } catch (error) {
    console.error('Error in addUser:', error);
    handleError(error);
  }
};

// ✏️ Edit user
export const editUser = async (id, userData) => {
  try {
    console.log(`Editing user with ID: ${id}`, userData);
    const res = await api.put(`/users/edit/${id}`, userData);
    console.log('User updated:', res.data);
    return res.data;
  } catch (error) {
    console.error('Error in editUser:', error);
    handleError(error);
  }
};

// ❌ Delete user
export const deleteUser = async (id) => {
  try {
    console.log(`Deleting user with ID: ${id}`);
    const res = await api.delete(`/users/delete/${id}`);
    console.log('User deleted:', res.data);
    return res.data;
  } catch (error) {
    console.error('Error in deleteUser:', error);
    handleError(error);
  }
};
