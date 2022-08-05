import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../context/appContext";
// Import MUI Icons
import DarkMode from "@mui/icons-material/DarkModeOutlined";
import LightMode from "@mui/icons-material/LightModeOutlined";
// Theme Switch Icon Changes Based on Theme
export default function ThemeToggler() {
    const colorMode = useContext(ColorModeContext).toggleColorMode;
    return (
        <IconButton className="themeToggle" color="inherit" onClick={() => {colorMode();}}>
            {useTheme().palette.mode === "dark" ? <DarkMode className="dark" /> : <LightMode className="light" />}
        </IconButton>
    );
}
