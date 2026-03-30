import axios from "axios";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Testing from "../pages/templates/testing";

export default function RouteApp() {
    return (
        <Routes>
            <Route path="/template/:slug" element={<DynamicTemplate />} />
        </Routes>
    );
}

function DynamicTemplate() {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const res = await axios.get("/v1/template/");
                console.log(res.data.data[0]);
                setData(res.data.data[0]);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTemplate();
    }, []);

    if (loading) return <div>Loading...</div>;

    if (!data || slug !== data.slug_template) {
        return <div>Template not found</div>;
    }

    return (
        slug === "testing-yeizn" ? (
            <Testing />
        ) : (
            <div>
                <h1>Template not found</h1>
            </div>
        )
    );
}