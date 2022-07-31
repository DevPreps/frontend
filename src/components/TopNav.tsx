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
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = React.createContext({ toggleColorMode: () => {""} });

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

    const navLinks = [
        {
            to: "/posts/general",
            text: "General"
        },
        {
            to: "/posts/learn",
            text: "Learn"
        },
        {
            to: "/posts/interview",
            text: "Interview"
        },
        {
            to: "/posts/project",
            text: "Project"
        },
        {
            to: "/login",
            text: "SignIn"
        },
        {
            to: "/register",
            text: "SignUp"
        },
        {
            to: "/my-account/1",
            text: "Profile"
        }
    ]

    // Hamburger Menu Content
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={style.textCenter}>
            <Typography variant="h6" sx={style.margin.drawerTitle}>
                DevPrep
            </Typography>
            <Divider />
            <List>
                { navLinks?.map((link, index) => (
                    <ListItem disablePadding key={index}>
                        <ListItemButton sx={style.textCenter}>
                            <ListItemText
                                primary={
                                    <Link style={Links} to={link.to}>
                                        {link.text}
                                    </Link>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                ))}                
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
                        
                        <Box sx={{...style.typography.small, ...style.mobileView}}>                                
                            {toggleButton}
                        </Box>
                        <IconButton
                            sx={{...style.margin.iconBtn, ...style.mobileView}}
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                            <Box sx={style.desktopView}>
                                { navLinks?.map((link, index) => (
                                    <Button key={index}>
                                        <Link style={Links} to={link.to}>
                                            {link.text}
                                        </Link>
                                    </Button>
                                ))}
                                {toggleButton}
                            </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav" sx={style.mobileView}>
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
    desktopView: {
        display: { xs: "none", sm: "flex", md: "flex"},
    },
    mobileView: {
        display: { xs: "flex", sm: "none"},
    }
}