import { Link } from "react-router-dom";
import LoginHook from "../../hooks/auth/loginHook";

export default function Login() {
    const { register, handleSubmit, errors, onSubmit, onError, loading } = LoginHook();
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-full p-2 max-w-4xl mx-auto">
                <div className="flex rounded-2xl overflow-hidden shadow-2xl">

                    <div className="hidden md:flex flex-col justify-between flex-1 p-14 relative overflow-hidden
                     bg-[#4F46E5]">
                        <div className="absolute -top-20 -right-20 w-72 h-72 
    bg-white opacity-10 rounded-full"></div>
                        <div className="absolute top-80 -left-20 w-72 h-72 
    bg-white opacity-10 rounded-full "></div>
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

                        <div className="flex items-center space-x-3 relative z-10">
                            <div className="w-8 h-8 rounded-lg bg-white/15  text-white flex items-center justify-center text-sm">
                                ZY
                            </div>
                            <div className="text-white font-bold tracking-[3px] text-lg">
                                Zyvation
                            </div>
                        </div>

                        <div className="mt-10 relative z-10">
                            <div className="flex items-center rounded-2xl bg-white/20 p-2 text-sm w-2/3 backdrop-blur-md">
                                <div className="w-1 h-1 bg-green-400 rounded-full inline-block mr-2"></div>
                                <span className="text-white">Platform Undagan Digital #1</span>
                            </div>
                            <h1 className="text-white font-bold text-3xl leading-snug mt-4">
                                Selamat Datang kembali!
                            </h1>

                            <p className="text-white/70 mt-4 max-w-md text-sm">
                                Kelola undangan digital Anda yang elegan dan berkesan bersama ribuan pengguna Zyvation.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">
                            <div className=" bg-white/20 p-4 rounded-lg text-sm mt-8 backdrop-blur-md relative z-10">
                                <span className="text-white font-bold text-2xl">50K+</span>
                                <p className="text-white/70">Pengguna Aktif</p>
                            </div>
                            <div className=" bg-white/20 p-4 rounded-lg text-sm mt-8 backdrop-blur-md relative z-10">
                                <span className="text-white font-bold text-2xl">98%</span>
                                <p className="text-white/70">Kepuasan pengguna</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-96 bg-white flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold text-[#0b1f3a] mt-1">
                            Masuk ke Akun Anda
                        </h3>

                        <p className="text-gray-500 text-sm mb-6">
                            Belum punya akun? <Link to="/register" className="text-[#4F46E5] hover:underline">Daftar Gratis</Link>
                        </p>

                        <form onSubmit={handleSubmit(onSubmit,onError)}>
                            <div className="mt-4">
                                <label className="text-xs font-bold text-gray-700">Alamat Email</label>
                                <input type="email"
                                    {...register("email", { required: "Email wajib diisi" })}
                                    className={`w-full mt-1 px-4 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="nama@email.com" />
                            </div>
                            <div className="mt-4">
                                <label className="text-xs font-bold text-gray-700">Kata Sandi</label>
                                <input type="password"
                                    {...register("password", { required: "Kata sandi wajib diisi" })}
                                    className={`w-full mt-1 px-4 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}    
                                    placeholder="••••••••" />
                            </div>

                            <div className="mt-4 text-end">
                                <a href="#" className="text-xs text-[#4F46E5] hover:underline">Lupa kata sandi?</a>
                            </div>

                            <button type="submit"
                                className="w-full mt-4 py-3 rounded-lg font-bold text-sm text-white 
                            bg-linear-to-r from-blue-500 to-blue-700 cursor-pointer
                            shadow-lg shadow-blue-500/30 hover:opacity-90 transition">
                                {loading ? <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Memproses...
                                </span> : 'Masuk Sekarang'}
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                Dengan masuk, Anda menyetujui <a href="#" className="text-[#4F46E5] hover:underline">Syarat & Ketentuan</a> kami.
                            </p>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}