import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

// import MUI components
import Container from "@mui/material/Container";
<<<<<<< HEAD
import Footer from "../components/Footer";
=======
>>>>>>> development
const Home = () => {
    return (
        <Container maxWidth="xl">
            <TopNav />
            <h1>Home</h1>
            <Outlet />
<<<<<<< HEAD
            <Footer />
=======
>>>>>>> development
        </Container>
    );
};

export default Home;
