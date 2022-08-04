import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

// import MUI components
import Container from "@mui/material/Container";

const Home = () => {
    return (
        <Container maxWidth="xl">
            <TopNav />
            <Outlet />
        </Container>
    );
};

export default Home;
