import api from "../../api/interceptor";

export class AuthService {
    static async register(data) {
        return await api.post("/auth/register", data);
    }

    static async login(data) {
        return await api.post("/auth/login", data);
    }

    static async logout() {
        return await api.post("/auth/logout");
    }
}