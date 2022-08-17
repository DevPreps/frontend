import React, { useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ColorModeContext } from "../context/appContext";
import { baseTheme } from "./Themes";
// An interface that defines object parameters
interface IProps {
    children?: React.ReactNode;
}
// getting the localstorage item
const savedMode = window.localStorage.getItem("colorMode") as "light" | "dark";
export default function ThemeHandler({ children }: IProps) {
    // Use localStorage.getItem save the toggle color state
    // When the page is refreshed, it remains the current toggled mode
    const [mode, setMode] = useState(savedMode || "dark");
    // The useMemo Hook allows developers to cache variable values and dependency lists
    // provided for performance optimization.
    // Save toggle color in localStorage.
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const currMode = prevMode === "light" ? "dark" : "light";
                    localStorage.setItem("colorMode", currMode);
                    return currMode;
                });
            },
        }),
        [mode]
    );
    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(baseTheme(mode)), [mode]);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
