import React from "react";

import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

// Import Navbar Related Components
import Logo from "../theme/LogoNav";
import ThemeToggler from "../theme/ThemeToggler";
import SideNav from "./SideNav";

declare module "@mui/material/Button" {
    interface ButtonVariantOverrides {
        customVariant: true;
        container: true;
    }
}

export default function TopNav() {
    const navLinks = [
        {
            to: "/posts/general",
            text: "General",
        },
        {
            to: "/posts/learn",
            text: "Learn",
        },
        {
            to: "/posts/interview",
            text: "Interview",
        },
        {
            to: "/posts/project",
            text: "Project",
        },
    ];

    const groupNavLinks = [
        {
            to: "/login",
            text: "SignIn",
        },
        {
            to: "/register",
            text: "SignUp",
        },
        {
            to: "/my-account/1",
            text: "Profile",
        },
    ];

    const mobileLinks = [...navLinks, ...groupNavLinks];

    return (
        <>
            <AppBar position="sticky" color="secondary" sx={style.overlay}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={style.flexSpace.between}>
                        <Logo />
                        <Box sx={style.desktopView}>
                            {navLinks?.map((link, index) => (
                                <Button
                                    key={index}
                                    component={Link}
                                    to={link.to}
                                >
                                    {link.text}
                                </Button>
                            ))}
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />
                            {groupNavLinks?.map((link, index) => (
                                <Button
                                    key={index}
                                    component={Link}
                                    to={link.to}
                                >
                                    {link.text}
                                </Button>
                            ))}
                        </Box>
                        <ThemeToggler />
                        <SideNav>
                            {mobileLinks?.map((link, index) => (
                                <ListItem disablePadding key={index}>
                                    <ListItemButton
                                        component={Link}
                                        to={link.to}
                                        sx={style.ListItemButton}
                                    >
                                        <ListItemText
                                            sx={style.itemText}
                                            primary={link.text}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </SideNav>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export const style = {
    overlay: {
        zIndex: 1210,
    },
    ListItemButton: {
        textAlign: "center",
        justifyContent: "center",
        mb: 0.4,
    },
    buttonGroup: {
        mx: 0.4,
    },
    flexSpace: {
        between: {
            justifyContent: "space-between",
        },
    },
    itemText: {
        pt: 0.1,
        pb: 0.1,
    },
    drawerContent: {
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 180,
        },
    },
    desktopView: {
        display: { xs: "none", sm: "flex", md: "flex" },
    },
};
