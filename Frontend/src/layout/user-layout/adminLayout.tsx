import React, { useEffect } from "react";
// import Sidebar from '../Side-bar'
import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "../Side-bar";
import { useAuth } from "../../Hooks/useAuth";
// import { SideBar } from '../Side-bar'

const Adminlayout = () => {
  const navigate = useNavigate();
  const { accessToken,role } = useAuth();
  console.log(accessToken);

  useEffect(() => {
    if (accessToken === undefined) {
      navigate("/signin");
    }
    if (accessToken && role === "admin") {
      navigate("/user-dashboard");
    }
  }, [accessToken, navigate, role]);

  return (
    <Outlet />
  );
};

export default Adminlayout;
