import axios from 'axios';
const URL = process.env.REACT_APP_HOST;

//Register User
export const register = async (userData) => {
    try {
        const response = await axios.post(`${URL}/register`, userData);
        return response;
    } catch (error) {
        return error.response;
    }
}

//Register User
export const login = async (userData) => {
    try {
        const response = await axios.post(`${URL}/login`, userData);
        return response;
    } catch (error) {
        return error.response;
    }
}

// Logout User
export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("cbid");
}


