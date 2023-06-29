import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelector } from "./authSlice";

export default function AuthMiddleware() {
  const {isLogin} = useSelector(authSelector);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}
