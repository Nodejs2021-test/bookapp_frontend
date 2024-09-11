import axios from 'axios';
const URL = process.env.REACT_APP_HOST;


//singleUserByIDs User
export const singleUserByIDs = async (id) => {
    try {
        // Make the POST request with the user data
        const response = await axios.get(`${URL}/users/${id}`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getUserOrders(userId) {
    try{
    const response = await axios.get(`${URL}/user-products/${userId}`);
    return response;
    }catch (error) {
        return error.response;
    }
}

export const createOrder = async (ordersDetails) => {
    try {
        const response = await axios.post(`${URL}/orders`, ordersDetails);
        return response;
    } catch (error) {
        return error.response;
    }
    // const data = await response.json();
    // return data;
}