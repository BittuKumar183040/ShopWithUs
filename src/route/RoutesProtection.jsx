import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Nav from "./dashboard/navBar/Nav"

export const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

export const PrivateRoute = () => {
  return isAuthenticated() ? 
  <>
    <Nav />
    <Outlet/>
  </>
   :
   <Navigate to="/login" />;
};

export const PublicRoute = ({ isAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard", { replace: true }); // Redirect to dashboard and replace history
    }
  }, [isAuth]);

  return !isAuth ? <Outlet /> : null; // Render Outlet only if not authenticated
};

