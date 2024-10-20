import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};

export default MainLayout;
