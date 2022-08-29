import React from "react";

import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import { TopNav } from "../components";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <Container maxWidth="xl" disableGutters sx={styles.home}>
            <TopNav />
            <Outlet />
            <Footer />
        </Container>
    );
};

const styles = {
    home: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
} as const;
export default Home;
