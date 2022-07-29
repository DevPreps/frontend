import React from "react";
import { Outlet } from "react-router-dom";
import ThemeHandler from "../components/ThemeHandler";
const Home = () => {
    return (
        <div>
            <ThemeHandler/>
            <h1>Home</h1>
            <Outlet />
        </div>
    );
};

export default Home;
