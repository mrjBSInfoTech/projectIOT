import axios from "axios";

const API_URL = "http://localhost:5000/api/iot/data";

export const getIotData = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching IoT data:", error);
    throw error;
  }
};