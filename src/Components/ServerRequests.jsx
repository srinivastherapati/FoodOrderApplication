import axios from "axios";

const API_BASE_URL = "/api";
// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/customer/register`,
      userData
    );
    return await response.data;
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
    return await response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error logging in");
  }
};

export const getCustomerOrders = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/customer/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.data;
  } catch (e) {
    console.error(e);
  }
};
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/get`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.data;
  } catch (e) {
    console.error(e);
  }
};
export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customer/get`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.data;
  } catch (e) {
    console.error(e);
  }
};

export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const response = await axios.put(
      `https://your-api-endpoint/orders/${orderId}/status`, // Replace with your actual API endpoint
      { status: newStatus } // Payload with the new status
    );
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error; // Propagate the error to the caller
  }
};
