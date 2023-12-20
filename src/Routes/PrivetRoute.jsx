
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";


const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} replace to="/login"></Navigate>
};

export default PrivetRoute;