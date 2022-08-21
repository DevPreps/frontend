import React from "react";
import { Outlet } from "react-router-dom";
import { TopNav } from "../components";

// import MUI components
import Container from "@mui/material/Container";

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
    }
} as const;
export default Home;
