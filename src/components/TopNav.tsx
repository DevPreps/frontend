import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import LightMode from "@mui/icons-material/LightModeOutlined";
import DarkMode from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { themeBreak } from "./ThemeHandler";
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = React.createContext({ toggleColorMode: () => {""} });
// Desktop Nav
const Responsive = styled("div")(() => ({
    padding: themeBreak.spacing(1),
    display: "none",
    // Match [sm, md)
    //       [600px, 900px)
    [themeBreak.breakpoints.between("sm", "md")]: {
        display: "flex",
    },
    [themeBreak.breakpoints.up("md")]: {
        display: "flex",
    },
}));
// Mobile Nav 
const SmallView = styled("div")(() => ({
    padding: themeBreak.spacing(1),
    [themeBreak.breakpoints.down("sm")]: {
        display: "flex",
    },
    [themeBreak.breakpoints.up("sm")]: {
        display: "none",
    },
}));

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won"t need it on your project.
     */
    window?: () => Window;
}
export default function TopNav (props: Props) {
    // Get Current MUI Theme    
    const theme = useTheme();   
    const colorMode = React.useContext(ColorModeContext); 
    const LinkColorSwitch = (
        theme.palette.mode === "dark" ? (
            "#F3FFDE"
        ) : (
            "#191919"
        )
    )
    
    const Links = {
        color: LinkColorSwitch,
        textDecoration: "none",
        fontWeight: 700,
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // Theme Switch Icon Changes Based on Theme
    const toggleButton = (
        <IconButton
            onClick={colorMode.toggleColorMode}
            color="inherit"
        >
            {theme.palette.mode === "dark" ? (
                <LightMode />
            ) : (
                <DarkMode />
            )}
        </IconButton>
    );
    // Hamburger Menu Content
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={style.textCenter}>
            <Typography variant="h6" sx={style.margin.drawerTitle}>
                DevPrep
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={style.textCenter}>
                        <ListItemText
                            primary={
                                <Link style={Links} to="/posts/general">
                                    General
                                </Link>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={style.textCenter}>
                        <ListItemText
                            primary={
                                <Link style={Links} to="/posts/learn">
                                    Learn
                                </Link>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={style.textCenter}>
                        <ListItemText
                            primary={
                                <Link style={Links} to="/posts/interview">
                                    Interview
                                </Link>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={style.textCenter}>
                        <ListItemText
                            primary={
                                <Link style={Links} to="/posts/project">
                                    Project
                                </Link>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={style.textCenter}>
                        <ListItemText
                            primary={
                                <Link style={Links} to="/login">
                                    SignIn
                                </Link>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={style.textCenter}>
                        <ListItemText
                            primary={
                                <Link style={Links} to="/register">
                                    SignUp
                                </Link>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={style.textCenter}>
                        <ListItemText
                            primary={
                                <Link style={Links} to="/my-account/1">
                                    Profile
                                </Link>
                            }
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;
    
    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={style.flexSpace.between}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{...style.typography, ...style.typography.medium}}
                        >
                            DevPrep + LOGO
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"   
                            href="/"
                            sx={{...style.typography, ...style.typography.small}}
                        >
                            LOGO
                        </Typography>
                        
                        <SmallView>
                        <Box>                                
                            {toggleButton}
                        </Box>
                        <IconButton
                            sx={style.margin.iconBtn}
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        </SmallView>
                        <Responsive>
                            <Box>
                                <Button>
                                    <Link style={Links} to="/posts/general">
                                        General
                                    </Link>
                                </Button>
                                <Button>
                                    <Link style={Links} to="/posts/learn">
                                        Learn
                                    </Link>
                                </Button>
                                <Button>
                                    <Link style={Links} to="/posts/interview">
                                        Interview
                                    </Link>
                                </Button>
                                <Button>
                                    <Link style={Links} to="/posts/project">
                                        Project
                                    </Link>
                                </Button>
                                <Button>
                                    <Link style={Links} to="/login">
                                        SignIn
                                    </Link>
                                </Button>
                                <Button>
                                    <Link style={Links} to="/register">
                                        SignUp
                                    </Link>
                                </Button>
                                <Button>
                                    <Link style={Links} to="/my-account/1">
                                        Profile
                                    </Link>
                                </Button>
                                {toggleButton}
                            </Box>
                        </Responsive>
                    </Toolbar>
                </Container>
            </AppBar>
            <SmallView>
            <Box component="nav">
                <Drawer
                    anchor={"right"}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={style.drawerContent}
                >
                    {drawer}
                </Drawer>
            </Box>
            </SmallView>
        </>
    );
};

const style = {
    textCenter: {
        textAlign: "center"
    },
    margin: {
        iconBtn: { ml: .5 },
        drawerTitle: { my: 2 }
    },
    flexSpace: {
        between: {
            justifyContent: "space-between",
        }
    },
    drawerContent: {
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 180,
        },
    },
    typography: {        
        mr: 2,
        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".2rem",
        color: "inherit",
        textDecoration: "none",        
        small: {
            display: { xs: "flex", md: "none" },
        },
        medium: {
            display: { xs: "none", md: "flex" },
        }
    },
}