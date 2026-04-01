import { BiExit } from "react-icons/bi";

export default function Navbar() {
    return (
        <nav className="bg-white p-4 rounded-lg">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <div className="text-lg font-bold text-[#4F46E5]">Zyvation</div>
                <button className="border-red-500 border px-3 py-1 rounded-lg flex items-center gap-2 text-sm text-red-500 cursor-pointer hover:bg-red-500 hover:text-white transition-colors ">
                    <BiExit />
                    <span>Logout</span>
                </button>
            </div>
        </nav>
    )
}