import React from "react";
import IconButton from "@mui/material/IconButton";
// Import MUI Icons
import DarkMode from "@mui/icons-material/DarkModeOutlined";
import LightMode from "@mui/icons-material/LightModeOutlined";

import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../context/appContext";
// Theme Switch Icon Changes Based on Theme
export default function ThemeToggler() {
    const colorMode = React.useContext(ColorModeContext);
    return (
        <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {useTheme().palette.mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
    );
}
