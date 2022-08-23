import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// import MUI components
// import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
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
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

// import MUI icons and colors
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DraftsIcon from "@mui/icons-material/Drafts";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import LogoutIcon from "@mui/icons-material/Logout";

const MyAccount = () => {
    // TODO - currentUser will be changed to a global state
    const currentUser = {
        userId: 1,
        username: "Santa",
        imageUrl:
            "https://cdn.pixabay.com/photo/2016/11/15/19/37/noel-1827278_960_720.jpg",
    };
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
    const [open, setOpen] = useState(true); // toggle the drawer
    const [selectedIndex, setSelectedIndex] = useState(1); // selected menu/list item
    
    const handleListItemClick = (
      index: number,
    ) => {
      setSelectedIndex(index);
    };

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <Container maxWidth="xl" sx={styles.container}>
            {/* <CssBaseline /> */}
            <Divider orientation="vertical" sx={styles.divider(open)}>
                <Fab
                    size="small"
                    color="success"
                    aria-label="drawer-toggle"
                    sx={styles.fab}
                    onClick={handleDrawerToggle}
                >
                    {open ? <ArrowBackIosIcon sx={styles.toggleIcon}/> : <ArrowForwardIosIcon sx={styles.toggleIcon} />}
                </Fab>
            </Divider>

            <Box
                component="nav"
                sx={styles.boxDrawer(open)}
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
                                component={Link}
                                to="/my-account/${currentUser.userId}"
                            />
                        ) : (
                            <Avatar
                                sx={styles.avatar}
                                aria-label="user image"
                                color="error"
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
                        {sidebarLinks?.map((link, index) => (
                            <ListItem key={link.text} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={link.to}
                                    data-testid={link.text}
                                    selected={selectedIndex === index}
                                    onClick={() => handleListItemClick(index)}
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

// styles
const drawerWidth = 240;
const styles = {
    avatar: {
        mr: 2,
    },
    boxDrawer(open: boolean) {
        return {
            position: {
                xs: open ? "absolute!important" : "static",
                md: open ? "static!important" : "absolute",
            },
            display: "flex",
            minWidth: {
                xs: open ? drawerWidth : 20,
                xl: 0,
            },
            left: 0,
        };
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
    },
    divider(open: boolean) {
        return {
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            zIndex: 1201,
            left: open ? "213px" : "-10px",
        };
    },
    drawer: {
        borderRight: "none",
        "& .MuiDrawer-paper": {
            width: drawerWidth,
        },
        "& .MuiDrawer-paperAnchorLeft": {
            borderRight: "none",
        },
    },
    fab: {
        width: {
            xs: 24,
            md: 32},
        minHeight: {
            xs: 24,
            md: 32},
        height: {
            xs: 24,
            md: 32},
    },
    namebar: {
        pl: 2,
        mt: 5,
        mb: 3,
        display: "flex",
        alignItems: "center",
    },
    toggleIcon: {
        height: {
            xs: 12,
            md: 16
        },
    },
} as const;

export default MyAccount;
