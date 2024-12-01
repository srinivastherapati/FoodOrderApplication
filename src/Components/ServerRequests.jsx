import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";
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

export const getCustomerOrders=async (id)=>{
  try{
    const response= await axios.get(`${API_BASE_URL}/orders/customer/${id}`,{
      method:"GET",
      headers:{ "Content-Type": "application/json" },
    }
    );
    return await response.data;
  }
  catch (e) {
    console.error(e);
  }
}
export const getAllOrders=async ()=>{
  try{
    const response= await axios.get(`${API_BASE_URL}/orders/get`,{
      method:"GET",
      headers:{ "Content-Type": "application/json" },
    }
    );
    return await response.data;
  }
  catch (e) {
    console.error(e);
  }
}
export const getAllCustomers=async ()=>{
  try{
    const response= await axios.get(`${API_BASE_URL}/customer/get`,{
      method:"GET",
      headers:{ "Content-Type": "application/json" },
    }
    );
    return await response.data;
  }
  catch (e) {
    console.error(e);
  }
}