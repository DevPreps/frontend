import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { keyframes } from "@emotion/react";

const MyAccount = () => {
    // TODO - currentUser will be changed to a global state
    const currentUser = {
        userId: 1,
    };
    const [open, setOpen] = React.useState(true);
    const sidebarLinks = [
        {
            to: `/my-account/${currentUser.userId}`,
            text: "Personal Info",
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
    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {sidebarLinks.map((link) => (
                    <ListItem key={link.text} disablePadding>
                        <ListItemButton component={Link} to={link.to}>
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
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            {/* <CssBaseline /> */}
            <Box
                component="nav"
                sx={{
                    position: "relative",
                    ...(open && {
                        flexShrink: { md: 0 },
                        width: {
                            xs: drawerWidth,
                            xl: 0,
                        },
                    }),
                    ...(!open && {
                        width: "24px",
                    }),
                }}
                aria-label="my account folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    // variant="temporary"
                    open={open}
                    onClose={handleDrawerToggle}
                    // ModalProps={{
                    //   keepMounted: true, // Better open performance on mobile.
                    // }}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                {/* <Divider orientation="vertical" sx={{position: "relative",}}> */}
                <IconButton
                    color="error"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                        position: "absolute",
                        zIndex: 1201,
                        ...(!open
                            ? {
                                  right: {
                                      xs: "-10px",
                                  },
                              }
                            : {
                                  right: {
                                      xs: "-180px",
                                      md: 0,
                                  },
                              }),
                    }}
                >
                    {open ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                </IconButton>
                {/* </Divider> */}
            </Box>
            {/* <Box
                component="main"
                sx={{
                    // flexGrow: 1,
                    p: 3,
                    // width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
            </Box> */}
            <Outlet />
        </Box>
    );
};

// const MyAccount = () => {
//     return (
//         <div style={{ display: "flex", flexDirection: "column" }}>
//             MyAccount
//             <Link to="/my-account">PersonalInfo</Link>
//             <Link to="/my-account/1/my-posts">My Posts</Link>
//             <Link to="/my-account/my-drafts">My Drafts</Link>
//             <Link to="/my-account/my-bookmarks">My Bookmarks</Link>
//             <Outlet />
//         </div>
//     );
// };

const drawerWidth = 240;
export default MyAccount;
