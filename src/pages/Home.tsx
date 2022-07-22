import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import NewGeneralPost from "./NewGeneralPost";

// import MUI components
import Container from "@mui/material/Container";
const Home = () => {
    return (
        <Container maxWidth="xl">
            <TopNav />
            <h1>Home</h1>
            <NewGeneralPost />
            <Outlet />
        </Container>
    );
};

export default Home;
