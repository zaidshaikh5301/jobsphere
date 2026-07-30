import api from "./axios";


// Register User
export const registerUser = async (userData) => {
    const response = await api.post(
        "/api/auth/signup",
        userData
    );

    return response.data;
};


// Login User
export const loginUser = async (userData) => {
    const response = await api.post(
        "/api/auth/login",
        userData
    );

    return response.data;
};


// Logout User
export const logoutUser = async () => {
    const response = await api.post(
        "/api/auth/logout"
    );

    return response.data;
};