import api from "../../api/interceptor";

export async function RegisterService(data){
    return await api.post('/auth/register', data);
}