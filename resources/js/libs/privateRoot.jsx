import { Navigate } from "react-router-dom";

export default function PrivateRoot({ children, isAuth }) {
    if (isAuth === false) {
        return <Navigate to="/login" replace />;
    }
    
    return children;
}