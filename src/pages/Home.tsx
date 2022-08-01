import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

// import MUI components
import Container from "@mui/material/Container";
import Heroes from "../components/Heroes";
const Home = () => {
    return (
        <Container maxWidth="xl">
            <TopNav />
            <Heroes />
            <Outlet />
        </Container>
    );
};

export default Home;
