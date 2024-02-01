import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authState } from "./authSlice";

export default function AuthMiddleware() {
  const {isLogin} = useSelector(authState);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}
