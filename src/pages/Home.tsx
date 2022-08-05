import React from "react";
import { Outlet } from "react-router-dom";
import { TopNav } from "../components";

// import MUI components
import Container from "@mui/material/Container";

import Footer from "../components/Footer";

const Home = () => {
    return (
        <Container maxWidth="xl">
            <TopNav />
            <h1>Home</h1>
            <Outlet />
            <Footer />
        </Container>
    );
};

export default Home;
