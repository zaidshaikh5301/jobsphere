import axios from "axios";

const api = axios.create({
    baseURL: "https://intern-crud-task-api.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});


// Add token automatically
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);


export default api;