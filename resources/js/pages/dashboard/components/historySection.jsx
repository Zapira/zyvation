import { BsGear, BsGlobe } from "react-icons/bs";
import ring from "../../../../../public/assets/ring.png";
import { Link } from "react-router-dom";

export default function HistorySection() {
    const exampleData = [
        {
            id: 1,
            title: "Muhammad Rizki & Novita",
            url: "https://zyvation.com/muhammadrizki-novita",
        },
        {
            id: 2,
            title: "Ahmad & Siti",
            url: "https://zyvation.com/ahmad-siti",
        }
    ]
    return (
        <>
            <div className="mt-11">
                <h2 className="text-2xl text-black font-extrabold">Undangan Milikmu</h2>
                <span className="text-gray-400">Undagan yang pernah anda buat</span>
            </div>
            <div className="mt-3 space-y-4">
                {exampleData.map((item) => (
                    <div className="border-gray-300 border rounded-xl">
                        <div className="flex items-center gap-4 p-4">
                            <img src={ring} alt="ring" width={50} height={50} />
                            <div className="text-center">
                                <span className="text-black font-bold">{item.title}</span>
                                <div className="text-[#4F46E5] flex items-center gap-1 font-semibold ml-auto cursor-pointer mt-1">
                                    <BsGlobe size={15} /><span className="underline text-sm">Kunjungi website</span>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <Link to="/detail" className="text-[#4F46E5] font-semibold cursor-pointer flex items-center gap-1">
                                    <BsGear size={20} />
                                    <span>Kelola</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}