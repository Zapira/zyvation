import axios from "axios";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Testing from "../pages/templates/testing";
import Login from "../pages/auth/login";
import PrivateRoot from "../libs/privateRoot";
import Loader from "../components/ui/loader";
import api from "../api/interceptor";
import Register from "../pages/auth/register";

export default function RouteApp() {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        api.get('/auth/checking')
            .then(() => setIsAuth(true))
            .catch(() => setIsAuth(false));
    }, []);

    if (isAuth === null) {
        return <Loader />;
    }

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/template/:slug" element={<DynamicTemplate />} />
            <Route path="/" element={<PrivateRoot isAuth={isAuth}><div>Home Page</div></PrivateRoot>} />
            <Route path="*" element={<div>Page Not Found</div>} />
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