import { RxDashboard } from "react-icons/rx";

export default function WelcomeSection() {
    return (
        <div className="bg-[#4F46E5] p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
                <h2 className="text-lg mb-4 text-gray-300">Dashboard</h2>
                <p className="text-white mb-4 text-2xl font-bold">
                    Selamat datang, Muhammad Rizki
                </p>
                <p className="text-gray-300 text-xl">
                    Kelolah undangan anda dengan mudah dan cepat.
                </p>
            </div>
            <div>
                <RxDashboard size={100} className="text-white" />
            </div>

        </div>

    );
}