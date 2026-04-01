import { useForm } from "react-hook-form";
import { AuthService } from "../../services/auth/authService";
import { useState } from "react";
import Swal from "sweetalert2";

export default function LoginHook() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        if (loading) return;
        setLoading(true);
        try {
            const payload = data;
            const response = await AuthService.login(payload);
            console.log(response);
            if (response.data.status === "success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Berhasil',
                    text: 'Selamat datang!',
                }).then(() => {
                    window.location.href = "/";
                });
            }
        } catch (error) {
            console.error(error.response);
            setLoading(false);
            if (error.response.status === 401) {
                Swal.fire({
                    title: 'Login Gagal',
                    text: 'Email atau password salah. Silakan coba lagi.',
                    icon: 'error',
                });
            } else {
                Swal.fire({
                    title: 'Login Gagal',
                    text: error.response?.data?.errors || 'Server sedang dalam maintenance.',
                    icon: 'error',
                })
            }
        }
    }


    const onError = (errors) => {
        console.error(errors.response);
        setLoading(false);
        Swal.fire({
            icon: 'error',
            title: 'Pendaftaran Gagal',
            text: 'Pastikan semua field diisi dengan benar.',
        });
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        onError,
        loading
    }
}