import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const PublicRoute = () => {
  const { profile, isProfileLoading, isAuthenticated } = useUserStore();
  const location = useLocation();

  useEffect(() => {
    profile();
  }, [profile]);

  if (isProfileLoading) return <Loader />;

  if (isAuthenticated) {
    const redirectPath = location.state?.from?.pathname || "/profile";
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
