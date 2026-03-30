import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_URL, withCredentials: true
})

api.interceptors.request.use(
    response=> response,
    error => {
        if (error.response && error.response.status === 401 && window.location.pathname !== "/login") {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
)

export default api;