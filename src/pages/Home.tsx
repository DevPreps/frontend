import React from "react";
import { Outlet } from "react-router-dom";
import { TopNav } from "../components";

const Home = () => {
    return (
        <div>
            <TopNav />
            <h1>Home</h1>
            <Outlet />
        </div>
    );
};

export default Home;
