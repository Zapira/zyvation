import Navbar from "../../components/shared/navbar";
import Sidebar from "../../components/shared/sidebar";
import HistorySection from "./components/historySection";
import WelcomeSection from "./components/welcomeSection";

export default function Dashboard() {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <Navbar />
            <div className="mt-4 flex gap-4">
                <Sidebar />
                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                    <div className="p-3">
                        <WelcomeSection />
                        <HistorySection />
                    </div>
                </div>
            </div>
        </div>
    )
}