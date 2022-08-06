import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// import MUI components
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

// import MUI icons and colors
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DraftsIcon from "@mui/icons-material/Drafts";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const MyAccount = () => {
    // TODO - currentUser will be changed to a global state
    const currentUser = {
        userId: 1,
        username: "Santa",
        imageUrl:
            "https://cdn.pixabay.com/photo/2016/11/15/19/37/noel-1827278_960_720.jpg",
    };
    const [open, setOpen] = useState(true);
    const sidebarLinks = [
        {
            to: `/my-account/${currentUser.userId}`,
            text: "My Profile",
            icon: <AccountBoxIcon />,
        },
        {
            to: `/my-account/${currentUser.userId}/my-posts`,
            text: "My Posts",
            icon: <InboxIcon />,
        },
        {
            to: `/my-account/${currentUser.userId}/my-drafts`,
            text: "My Drafts",
            icon: <DraftsIcon />,
        },
        {
            to: `/my-account/${currentUser.userId}/my-bookmarks`,
            text: "My Bookmarks",
            icon: <FolderSpecialIcon />,
        },
    ];
    // styles. As 'open' will be used for conditional styling, so the following styles const needs to be placed inside this component
    const drawerWidth = 240;
    const styles = {
        avatar: {
            bgcolor: red[500],
            mr: 2,
        },
        box: {
            position: {
                xs: open ? "absolute" : "static",
                md: open ? "static" : "absolute",
                xl: "absolute",
            },
            width: open ? drawerWidth : 0,
            left: 0,
        },
        container: { display: "flex" },
        divider: {
            height: "100vh",
            position: "absolute",
            top: 0,
            zIndex: 1201,
            left: open ? "209px" : "-10px",
        },
        drawer: {
            "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
            },
        },
        namebar: {
            pl: 2,
            mt: 5,
            mb: 3,
            display: "flex",
            alignItems: "center",
        },
    } as const;

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <Container maxWidth="xl" sx={styles.container}>
            {/* <CssBaseline /> */}
            <Divider orientation="vertical" sx={styles.divider}>
                <Fab
                    size="small"
                    color="primary"
                    aria-label="drawer-toggle"
                    onClick={handleDrawerToggle}
                >
                    {open ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                </Fab>
            </Divider>

            <Box
                component="nav"
                sx={styles.box}
                aria-label="my account folders"
            >
                <Drawer
                    open={open}
                    variant="persistent"
                    anchor="left"
                    sx={styles.drawer}
                >
                    {/* <div> */}
                    <Toolbar />
                    {/* username and image */}
                    <Stack direction="row" sx={styles.namebar}>
                        {currentUser.imageUrl !== "" ? (
                            <Avatar
                                alt={currentUser.username}
                                src={currentUser.imageUrl}
                                sx={styles.avatar}
                            />
                        ) : (
                            <Avatar
                                sx={styles.avatar}
                                aria-label="user image"
                                color={red[500]}
                            >
                                {currentUser.username[0].toUpperCase()}
                            </Avatar>
                        )}
                        <Typography variant="h6">
                            {currentUser.username}
                        </Typography>
                    </Stack>
                    <Divider />
                    <List>
                        {sidebarLinks?.map((link) => (
                            <ListItem key={link.text} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={link.to}
                                    data-testid={link.text}
                                >
                                    <ListItemIcon>{link.icon}</ListItemIcon>
                                    <ListItemText primary={link.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    {/* </div> */}
                </Drawer>
            </Box>
            <Outlet />
        </Container>
    );
};

export default MyAccount;
