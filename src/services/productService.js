import axios from 'axios';
const URL = process.env.REACT_APP_HOST;

export const fetchProductList = async () => {
    try {
        const response = await axios.get(`${URL}/products/`);
        return response;
    } catch (error) {     
        return error;
    }
}

//Get a single product by ID
export const singleProductByIDs = async (id) => {
    try {
        const response = await axios.get(`${URL}/products/${id}`);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

export const featuredProductLists = async () => {
    try {
        const response = await axios.get(`${URL}/featured_products/`);
        return response.data;
    } catch (error) {
        return error.response;
    }
}