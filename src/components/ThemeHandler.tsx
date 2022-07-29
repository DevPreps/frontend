import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useMemo, useState } from "react";
import { baseTheme } from "./Themes";
import TopNav, { ColorModeContext } from "./TopNav";
// Break Points
export const themeBreak = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 653,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})
const COLOR_MODE_KEY = "colorMode";
type themeColorMode = "light" | "dark";
// Theme Switch Function
export default function ThemeHandler() {
    const savedMode = localStorage.getItem(COLOR_MODE_KEY) as themeColorMode;     
    // Use localStorage.getItem save the toggle color state
    // When the page is refreshed, it remains the current toggled mode
    const [mode, setMode] = useState<themeColorMode>(savedMode || "dark");
    // Users might have a preference for light or dark mode that they've set through their operating system
    // use of this preference with the useMediaQuery hook and the prefers-color-scheme media query.
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    useEffect(() => {
        if (!savedMode) {
            setMode(prefersDarkMode ? "dark" : "light");
        }
    }, [prefersDarkMode, savedMode]);
    // The useMemo Hook allows developers to cache variable values and dependency lists
    // provided for performance optimization.
    // Save toggle color in localStorage.
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const currMode = prevMode === "light" ? "dark" : "light";
                    localStorage.setItem(COLOR_MODE_KEY, currMode);
                    return currMode;
                });
            },
        }),
        []
    );
    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(baseTheme(mode)), [mode]);
    // Fixed Navbar Function
    const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
    return (
        <React.Fragment>
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="fixed">
                    <TopNav />
                </AppBar>
            </ThemeProvider>
        </ColorModeContext.Provider>
         <Offset />
         </React.Fragment>
    );
}