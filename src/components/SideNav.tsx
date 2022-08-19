import React from "react";
// Import MUI Components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

// An interface that defines object parameters
interface IProps {
    children?: React.ReactNode;
}

export default function SideNav({ children }: IProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <IconButton
                className="hamburger"
                sx={{ ...style.margin.iconBtn, ...style.mobileView }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
            >
                <MenuIcon />
            </IconButton>
            <Box component="nav" sx={style.mobileView}>
                <Drawer
                    anchor={"right"}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={style.drawerContent}
                >
                    <Box onClick={handleDrawerToggle} sx={style.textCenter}>
                        <Typography variant="h6" sx={style.margin.drawerTitle}>
                            DevPrep
                        </Typography>
                        <Divider />
                        <List>{children}</List>
                    </Box>
                </Drawer>
            </Box>
        </>
    );
}

const style = {
    textCenter: {
        textAlign: "center",
    },
    mobileView: {
        display: { xs: "flex", sm: "none" },
    },
    drawerContent: {
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 180,
        },
        zIndex: "1250!important",
    },
    margin: {
        iconBtn: { ml: 0.5 },
        drawerTitle: { my: 2 },
    },
};
