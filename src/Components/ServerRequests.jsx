import axios from "axios";

const API_BASE_URL = "https://ten-humans-search.loca.lt/api";
// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/customer/register`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error registering user");
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/customer/login`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error logging in");
  }
};
