import React, { useContext } from "react";

import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";

import { ColorModeContext } from "../context/appContext";
// Import MUI Icons
// Theme Switch Icon Changes Based on Theme
export default function ThemeToggler() {
    return (
        <IconButton
            className="themeToggle"
            color="inherit"
            onClick={useContext(ColorModeContext).toggleColorMode}
        >
            {useTheme().palette.mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
    );
}
