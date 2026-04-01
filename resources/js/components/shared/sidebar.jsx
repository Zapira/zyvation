export default function Sidebar() {
    return (
        <div className="w-64 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-[#4F46E5] mb-4">Zyvation</h2>
            <nav className="flex flex-col gap-2">
                <a href="#" className="text-gray-700 hover:text-[#4F46E5] transition-colors">Dashboard</a>
                <a href="#" className="text-gray-700 hover:text-[#4F46E5] transition-colors">Undangan Saya</a>
                <a href="#" className="text-gray-700 hover:text-[#4F46E5] transition-colors">Buat Undangan</a>
                <a href="#" className="text-gray-700 hover:text-[#4F46E5] transition-colors">Pengaturan Akun</a>
            </nav>
        </div>
    )
}