import { set, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { AuthService } from "../../services/auth/authService";

export function RegisterHook() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);


    const onSubmit = async (data) => {
        if (loading) return;
        setLoading(true);
        try {
            const payload = data;
            const response = await AuthService.register(payload);
            if(response.data.status === "success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Pendaftaran Berhasil',
                    text: 'Silakan masuk ke akun Anda.',
                }).then(() => {
                    window.location.href = "/login";
                });
            }
        } catch (error) {
            console.error(error.response);
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Pendaftaran Gagal',
                text: error.response?.data?.errors || 'Server sedang dalam maintenance.',
            });
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
        loading,
        onSubmit,
        onError
    }
}