import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const ProtectedRoute = () => {
    const { profile, isProfileLoading, isAuthenticated } = useUserStore();
    const location = useLocation();

    useEffect(() => {
        profile();
    }, [profile]);

    if (isProfileLoading) return <Loader />;

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
